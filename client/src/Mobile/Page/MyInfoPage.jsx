import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from '../Component/Header.jsx';
import './MainPage';

const MyInfoPage = () => {
  return (
    <div>
      <Header title='내정보관리' />
      <h2>비밀번호 재확인</h2>
      <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 
        다시 한번 확인해주세요.
      </p>

      <div className='MyInfoPage-wrapper'>
        <form action="./submit.html" id='login-form'>
        <div className='MyInfo-input'>
        <p className="label-name">아이디</p>
          <div className='input-box'>
          <label htmlFor="id">
            <input type="id"
            name='id'
            id='id'
            // disabled  비활성화와 함께 form으로 전송하여도 절대 전송 되지 않습니다.
            disabled
            placeholder='회원아이디' />
          </label>
          </div>
          <div className='input-box'>
          <label htmlFor="pw">
            <input type="password"
            name='pw'
            id='pw'
            placeholder='현재 비밀번호를 입력해 주세요.'/>
          </label>
          </div>
        </div>
        <button type='submit' id='login-btn'>확인</button>
        </form>
        </div>
    </div>
  );
};

export default MyInfoPage;