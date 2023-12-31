import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from '../Component/Header';
import TabBar from '../Component/TabBar';
import MyPageComponent from '../Component/MyPageComponent';
import './MyPage.css';

const MyPage = () => {
  const order = [
    {
      title : '결제완료',
      count : '0'
    },
    {
      title : '상품준비중',
      count : '0'
    },
    {
      title : '배송중',
      count : '0'
    },
    {
      title : '배송완료',
      count : '0'
    }
  ]

  const customerService = [
    {
      title : '고객센터',
      to : ''
    },
    {
      title : '로그아웃',
      to : ''
    },
    {
      title : '회원탈퇴',
      to : '/Leave'
    },
  ]

  return (
    <div>
      <Header title='마이페이지'/>

      <div className="mypage-not-logged-in">
        <p>회원가입 하고<br/>다양한 혜택을 받아보세요!</p>
        <button>로그인/회원가입</button>
      </div>

      <div className="mypage-logged-in">
        <div className="mypage-info">
          <div className='mypage-info-img'>
            <img src="https://cdn-icons-png.flaticon.com/512/7101/7101338.png" alt="" />
          </div>
          <div>
            <p className='user-name'>김주은님</p>
            <p>이 달의 회원 등급 <span>새싹</span><Icon icon="iconamoon:arrow-right-2-light" style={{fontSize : '1rem'}}/></p>
        </div>
        </div>
        <div className="reserves benefits">
          <p>적립금</p>
          <p><span>0P</span><Icon icon="iconamoon:arrow-right-2-light" style={{fontSize : '1.5rem', color : '#999'}}/></p>
        </div>
        <div className="coupon benefits">
          <p>쿠폰</p>
          <p><span>2장</span><Icon icon="iconamoon:arrow-right-2-light" style={{fontSize : '1.5rem', color : '#999'}}/></p>
        </div>
      </div>

      <div className="my-order-info mypage-box">
        <h3>나의 주문정보</h3>
        <div className="order">
          {
            order.map((item, index) => {
              return(
                <div>
                  <p>{item.count}</p>
                  <p>{item.title}</p>
                </div>
              )
            })
          }
        </div>
        
        <div className="mypage-menu">
          <MyPageComponent title='주문/배송 조회'/>
          <MyPageComponent title='취소/반품/교환 조회'/>
        </div>
      </div>

      <div className="my-shopping-benefits mypage-box">
        <h3>나의 쇼핑혜택</h3>
        <div className="mypage-menu">
          <MyPageComponent title='쿠폰'/>
          <MyPageComponent title='마일리지'/>
        </div>
      </div>

      <div className="shopping-activities mypage-box">
        <h3>나의 쇼핑활동</h3>
        <div className="mypage-menu">
          <MyPageComponent title='나의 찜'/>
          <MyPageComponent title='최근 본 상품'/>
          <MyPageComponent title='상품리뷰'/>
          <MyPageComponent title='상품문의'/>
          <MyPageComponent title='1:1 문의내역'/>
        </div>
      </div>

      <div className="my-Profile mypage-box">
        <h3>나의 회원정보</h3>
        <div className="mypage-menu">
          <MyPageComponent title='회원 정보 관리'/>
          <MyPageComponent title='배송 정보 관리'/>
          <MyPageComponent title='공지사항'/>
        </div>
      </div>

      <div className="customer-service-box mypage-box">
        {
          customerService.map((item, index) => {
            return(
              <Link to={item.to} className='customer-service'>
                <p>{item.title}</p>
                <Icon icon="iconamoon:arrow-right-2-light" style={{fontSize : '1.5rem'}}/>
              </Link>
            )
          })
        }
      </div>
      <TabBar/>
    </div>
  );
};

export default MyPage;