import React from 'react';
import { Icon } from '@iconify/react';
import './LoginPage.css';
import Header from '../Component/Header';
import TabBar from '../Component/TabBar';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
    <Header title=''/>
    <div className='LoginPage-wrapper'>
      <div className='logo'>
      <Link to='/'><img src="" alt="logo"/></Link>
      </div>
        <form action="./submit.html" id='login-form'>
        <div className='login-input'>
          <div className='input-box'>
          <label htmlFor="id">
            <input type="text"
            name='id'
            id='id'
            placeholder='아이디 입력' />
          </label>
          </div>
          <div className='input-box'>
          <label htmlFor="pw">
            <input type="password"
            name='pw'
            id='pw'
            placeholder='비밀번호 입력' />
          </label>
          </div>
        </div>
        <button type='submit' id='login-btn'>로그인</button>
        </form>
        <button>아이디/비밀번호 찾기</button>
        </div>
      <TabBar/>
    </>
  );
};

export default LoginPage;