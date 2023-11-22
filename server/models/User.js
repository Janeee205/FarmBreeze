const mongoose = require('mongoose');

let Userinfo;

try {
  // 이미 정의되었는지 확인
  Userinfo = mongoose.model('Userinfo');
} catch (e) {
  // 아직 정의되지 않았다면 정의
  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // 다른 사용자 관련 필드들을 필요에 따라 추가할 수 있습니다.
  });

  User = mongoose.model('Userinfo', userSchema);
}

module.exports = User;
