import React from 'react';
import { Icon } from '@iconify/react';
import './LoginPage.css';
import { Link } from 'react-router-dom';



const LoginPage = () => {
  const handleIconClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <div className='header' >
      <Icon className='icon' icon="streamline:delete-1-solid" onClick={handleIconClick} />
    </div>

    <div className='LoginPage-wrapper'>
      <div className='logo'>
      <Link to='/'><img src="" alt="logo"/></Link>
      </div>
        <button className='login-btn'>카카오 로그인</button>
        <button className='login-btn'>아이디 로그인</button>
        <button className='join-btn'><Link to={'/login2'}>일반회원가입</Link></button>
        </div>
    </>
  );
};

export default LoginPage;