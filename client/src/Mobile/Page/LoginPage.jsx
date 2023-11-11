import React from 'react';
import { Icon } from '@iconify/react';
import './LoginPage.css';
import Header from '../Component/Header';
import TabBar from '../Component/TabBar';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
    <div className='LoginPage-wrapper'>
      <Header title='마이페이지'/>
        <Link to='/'><img src="" alt="logo"/></Link>
        <form action="./submit.html" id='login-form'>
        <div className='login-input'>
          <label htmlFor="id">
            <input type="text"
            name='id'
            id='id'
            placeholder='아이디 입력' />
          </label>
          <br></br>
          <label htmlFor="pw">
            <input type="password"
            name='pw'
            id='pw'
            placeholder='비밀번호 입력' />
          </label>
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