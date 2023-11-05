const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));


// Passport ------------------------------ 수정해야 함 ---- 아직 안 함
passport.use(new LocalStrategy({
  usernameField : 'userid',
  passwordField : 'userpw',
  session : true,
  passReqToCallback : false
}, function(userID, userPW, done){
  db.collection('user').findOne({ID : userID}, function(error, user){
    if(error) return done(error);
    
    if(!user){
      return done(null, false, {message : '존재하지 않는 아이디입니다.'})
    }
    if(userPW == user.PW){
      return done(null, user)
    }else{
      return done(null, false, {message : '비밀번호가 일치하지 않습니다.'})
    }
  })
}))

passport.serializeUser(function(user, done){
  done(null, user.ID)
})

passport.deserializeUser(function(id, done){
  db.collection('user').findOne({ID : id}, function(error, result){
    done(null, result)
  })
})

// Passport 미들웨어 추가
app.use(passport.initialize());
app.use(passport.session());

// 세션 ---------------------------------------------------------------------
// 세션 시크릿 키 설정 (환경 변수로 설정하는 것이 안전)
const sessionSecretKey = process.env.SESSION_SECRET_KEY || 'defaultSecretKeyFarmbree';

router.use(session({
  secret : sessionSecretKey, // 세션 암호화에 사용할 비밀 키 
  resave : true, // 세션의 내용이 변경되지 않은 경우 다시 저장할 필요가 없음
  saveUninitialized : true // 초기화되지 않은 세션도 저장
}));


// 초기화 세팅 : 반드시 세션 설정 뒤로 순서 ------------------------------------
router.use(passport.initialize());
router.use(passport.session());

// cookieParser -------------------------------- 필요한지 확인 후 삭제 or 유지
// npm install cookie-parser --save  ★ 설치 ★ --------- 아직 설치 안 함 
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function (requests, response) {
  // Cookies that have not been signed 서명되지 않은 쿠키
  console.log('Cookies: ', requests.cookies)

  // Cookies that have been signed 서명된 쿠키
  console.log('Signed Cookies: ', requests.signedCookies)
});

// MongoDB 연결
mongoose.connect('mongodb+srv://admin:ajt5gvmjbqkhOohE@data.reyvnoz.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB 연결 확인
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB 연결 오류:'));
db.once('open', () => {
  console.log('MongoDB 연결 성공!');

  // 'users' 콜렉션에 접근
  const User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }), 'user');

  // 'users' 콜렉션에서 데이터 조회 (Promise를 사용)
  User.find({}).then(users => {
    console.log('조회된 사용자 데이터:', users);
  }).catch(err => {
    console.error('데이터 조회 오류:', err);
  });
});

// 검색 페이지 초기 데이터 가져오기 엔드포인트
app.get('/api/initial-data', (req, res) => {
  // 여기에서 초기 데이터를 가져와서 클라이언트에 전달
  const initialData = {
    recentSearches: [], // 최근 검색어
    recommendedSearches: [], // 추천 검색어
    trendingSearches: [], // 급상승 검색어
  };
  res.json(initialData);
});

// 검색 결과 가져오기 엔드포인트
app.get('/api/search', (req, res) => {
  const searchQuery = req.query.query;

  // 여기에서 검색 결과를 가져와서 클라이언트에 전달
  const searchResults = []; // 검색 결과

  res.json({ results: searchResults });
});


app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
