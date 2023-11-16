import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Top = () => {
  const topBtnStyle = {
    scroll : {
      position: 'fixed',
      right: '5%',
      bottom: '15%',
      zIndex: '10'
    },
    button : {
      width : '3rem',
      height : '3rem',
      padding : '0.5rem',
      borderRadius : '50%',
      backgroundColor : 'var(--main-color)'
    },
    icon : {
      fontSize : '2rem',
      color : '#fff'
    }
  }

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };

    console.log(window.scrollY);
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <div style={topBtnStyle.scroll}>
        <button style={topBtnStyle.button} onClick={scrollToTop}>
          <Icon style={topBtnStyle.icon} icon="tabler:arrow-up" />
        </button>
      </div>
    )
  );
};

export default Top;
