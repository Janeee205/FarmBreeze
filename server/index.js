const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

// 모든 정적 파일 제공
app.use(express.static(__dirname));

// 라우터 객체 설정
const router = express.Router();
app.use('/', router);

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
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

// app.get('/', function (requests, response) {
//   // Cookies that have not been signed 서명되지 않은 쿠키
//   console.log('Cookies: ', requests.cookies)

//   // Cookies that have been signed 서명된 쿠키
//   console.log('Signed Cookies: ', requests.signedCookies)
// });

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



app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});



// 검색 페이지 초기 데이터 가져오기 엔드포인트 ----------------------
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





// 로그인 상태 판별 ----------------------------------------------------------------------

router.post('/login', passport.authenticate('local', {
  failureRedirect : '/fail'
}), function(requests, response){
  response.redirect('/');
})


// 로그인 상태를 판단하여 userLoggedIn 값을 전달
router.get('/', function(requests, response){
  const userName = requests.cookies && requests.cookies.userName ? requests.cookies.userName : '';
  // 로그인 상태 판별 (Passport와 세션을 사용하여 userLoggedIn 설정)
  const userLoggedIn = requests.isAuthenticated(); // Passport를 통한 인증 상태 확인
  response.render('index.ejs', { userLoggedIn, userName });
})
router.get('/index', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('index.ejs', { userLoggedIn });
})

// 서버에서 로그인 상태를 반환하는 엔드포인트 생성
router.get('/get-user-status', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.json({ userLoggedIn })
});

router.get('/get-user-status-html', function(requests, response) {
  const userLoggedIn = requests.isAuthenticated();
  response.render('user-status.ejs', { userLoggedIn });
});


// 로그인 페이지
router.get('/login', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('login.ejs', { userLoggedIn });
})

// /fail
router.post('/login', passport.authenticate('local', {
  failureRedirect : '/fail'
}), function(requests, response){
  response.redirect('/')
})

router.get('/fail', function(requests, response){
  response.send('로그인 정보가 일치하지 않습니다.')
})


// 로그인 체크
function getLogin(requests, response, next){
  if (requests.isAuthenticated()) { // passport를 통한 인증 상태 확인
    next()
  }else{
    response.send('로그인이 필요한 페이지입니다.');
  }
}

// 마이페이지---------------------------------------------------------------------------------
router.get('/mypage', getLogin, function(requests, response){
  const currentUser = requests.user;
  const userLoggedIn = requests.isAuthenticated();
  response.render('mypage.ejs', { userLoggedIn, user : currentUser });
})

// 로그아웃
router.post('/logout', function(requests, response, next){
  requests.logOut(err => {
    if (err) {
      return next(err);
    } else {
      response.redirect('/');
    }
  });
})

// 회원정보 수정, 탈퇴--------------------------------------------------------------------------

router.put('/edit', function(requests, response){
  db.collection('user').updateOne({_id : parseInt(requests.body._id)},
    {$set:{ID : requests.body.id, PW : requests.body.pw}}, function(error, result){
      const updatedUserId = requests.body.id; // 수정된 사용자 아이디
      const updatedPassword = requests.body.pw; // 수정된 비밀번호
    requests.isAuthenticated() = {updatedUserId, updatedPassword};
    response.redirect('/mypage');
  })
})

router.post('/delete', function(requests, response){
  console.log(requests.body.delete)
  requests.body.delete = parseInt(requests.body.delete)

  db.collection('user').deleteOne({_id : requests.body.delete}, function(error, result){
    if(error){
      console.log(error)
    }
    console.log('회원탈퇴')
  })
  response.redirect('/');
})



// 회원가입 --------------------------------------------------------------------

router.get('/join', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('join.ejs', { userLoggedIn });
})

router.post('/id_check', (requests, response) => {
  let userid = requests.body.userid; // 클라이언트에서 전달된 아이디 값

  db.collection('user').findOne({ ID: userid }, function (error, user) {
    if (error) {
      console.error("에러 발생:", error);
      response.status(500).json({ error: "서버 오류" });
    } else {
      if (user) {
        // 아이디가 이미 존재하는 경우
        response.json({ exists: true });
      } else {
        // 아이디가 사용 가능한 경우
        response.json({ exists: false });
      }
    }
  });
});

router.post('/join', function(requests, response){
  db.collection('total').findOne({name:'dataLength'}, function(error, result){
    console.log(result.totalData);
    let totalDataLength = result.totalData;
    
    db.collection('user').insertOne({
      _id : totalDataLength+1, 
      ID : requests.body.userid, 
      PW : requests.body.userpw, 
      name : requests.body.username,
      birth : requests.body.year + requests.body.month + requests.body.date,
      gender : requests.body.gender,
      email : requests.body.usermail,
      phone : requests.body.country + requests.body.phonenum,
      adress : requests.body.sample6_postcode + requests.body.sample6_address + requests.body.sample6_detailAddress + requests.body.sample6_extraAddress
    }, function(error, result){
      if(error){
        return console.log(error);
      }
    })

    db.collection('total').updateOne({name : 'dataLength'},
    {$inc : {totalData:1}},
    function(error, result){
      if(error){
        return console.log(error);
      }
    })
    
  })
  response.redirect('/login');
})





// 전체 페이지 userLoggedIn 연결 --------------- 수정 필요 
router.get('/map', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('map.ejs', { userLoggedIn });
})
router.get('/about', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('about.ejs', { userLoggedIn });
})
router.get('/contact', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('contact.ejs', { userLoggedIn });
})
router.get('/course-daejeon', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('course-daejeon.ejs', { userLoggedIn });
})
router.get('/course-details', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('course-details.ejs', { userLoggedIn });
})
router.get('/member-info', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('member-info.ejs', { userLoggedIn });
})
router.get('/today-all', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();

  db.collection('api').find().toArray(function(error, result){
    response.render('today-all.ejs', {api : result, userLoggedIn });
  })
})
router.get('/today-do', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  
  db.collection('api').find({contenttypeid : '12'}).toArray(function(error, result){
    response.render('today-do.ejs', {api : result, userLoggedIn });
  })
})
router.get('/today-eat', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  
  db.collection('api').find({contenttypeid : '39'}).toArray(function(error, result){
    response.render('today-eat.ejs', {api : result, userLoggedIn });
  })
})
router.get('/today-see', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  
  db.collection('api').find({contenttypeid : '15'}).toArray(function(error, result){
    response.render('today-see.ejs', {api : result, userLoggedIn });
  })
})
router.get('/zzim', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('zzim.ejs', { userLoggedIn });
})
router.get('/policy', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('policy.ejs', { userLoggedIn });
})
router.get('/privacy', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('privacy.ejs', { userLoggedIn });
})
router.get('/sitemap', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('sitemap.ejs', { userLoggedIn });
})
router.get('/find-idpw', function(requests, response){
  const userLoggedIn = requests.isAuthenticated();
  response.render('find-idpw.ejs', { userLoggedIn });
})



