import React from 'react';
import { Icon } from '@iconify/react';
import './LoginPage2.css';
import Header from '../Component/Header';
import { Link } from 'react-router-dom';

const LoginPage2 = () => {
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
            placeholder='비밀번호 입력'/>
          </label>
          </div>
        </div>
        <button type='submit' id='login-btn'>로그인</button>
        </form>
        <Link><p className='find'>아이디/비밀번호 찾기</p></Link>
        </div>
    </>
    );
};

export default LoginPage2;