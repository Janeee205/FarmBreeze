import React from 'react';
import { Icon } from '@iconify/react';

const Header = (props) => {
  const header = {
    header : {
      position: 'relative',
      display : 'flex',
      alignItems: 'center',
      padding: '1.5rem',
      borderBottom: '0.1rem solid #D9D9D9',
      color: 'var(--main-color)'
    },
    icon : {
      position: 'absolute',
      fontSize: '2rem',
    },
    title : {
      margin: '0 auto',
      fontSize: '1.3rem',
    }
  }

  const goBack = () => {
    window.history.back();
  };

  return (
    <header style={header.header}>
      <Icon icon="mingcute:arrow-left-line" style={header.icon} onClick={goBack}/>
      <p style={header.title}>{props.title}</p>
    </header>
  );
};

export default Header;