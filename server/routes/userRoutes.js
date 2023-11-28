const express = require('express');
const router = express.Router();
const User = require('../models/user');

// 사용자 목록을 가져오는 라우트
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// 다른 사용자와 관련된 라우트들을 추가할 수 있습니다.

module.exports = router;
