const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// 리뷰 목록을 가져오는 라우트
router.get('/', async (req, res) => {
  try {
    // MongoDB에서 리뷰 목록을 가져오는 로직을 작성하세요.
    const reviews = await Review.find(); // 예시로 모든 리뷰를 가져오는 코드입니다.

    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Error fetching reviews' });
  }
});

// 다른 리뷰와 관련된 라우트들을 추가할 수 있습니다.

module.exports = router;
