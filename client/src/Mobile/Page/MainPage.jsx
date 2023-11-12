import React from 'react';
import { Link, } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Footer from '../Component/Footer';

const MainPage = () => {
  const header = {
    header : {
      display : 'flex',
      justifyContent : 'space-between',
      alignItems : 'center',
      margin : '1.5rem'
    },
    h1 : {
      fontSize : '2rem',
      color : 'var(--main-color)'
    },
    headerBox : {
      fontSize : '2rem'
    },
    headerIcon : {
      color : 'var(--main-color)',
      marginLeft : '0.2rem'
    }
  }
  return (
    <div>
      <header style={header.header}>
        <h1>
          <Link to='/' style={header.h1}>FarmBreeze</Link>
        </h1>
        <div className="header-box" style={header.headerBox}>
          <Link to='/Search'>
            <Icon icon='tdesign:search' style={header.headerIcon}/>
          </Link>
          <Link to='/Cart'>
            <Icon icon="ion:cart-outline" style={header.headerIcon}/>
          </Link>
        </div>
      </header>
      
      <Footer/>
    </div>
  );
};

export default MainPage;