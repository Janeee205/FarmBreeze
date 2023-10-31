const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

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

