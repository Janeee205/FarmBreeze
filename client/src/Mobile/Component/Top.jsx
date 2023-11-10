import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트를 감지하여 화살표의 가시성을 조절합니다.
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > window.innerHeight / 2);
  };

  // 화면이 로드될 때와 스크롤 이벤트 등록 시점에 이벤트 리스너를 추가합니다.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 화살표를 클릭했을 때 페이지를 맨 위로 스크롤합니다.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className='top'
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        display: isVisible ? 'block' : 'none',
        cursor: 'pointer',
      }}
      onClick={scrollToTop}
    >
      <Icon icon="emojione-monotone:up-arrow" color="#00385e" />
    </div>
  );
};

export default Top;
