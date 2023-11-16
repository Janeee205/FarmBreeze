import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from '../Component/Header';
import TabBar from '../Component/TabBar';
import MyPageComponent from '../Component/MyPageComponent';

const MyPage = () => {
  const order = [
    {
      title : '결재완료',
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
      <div className="my-order-info">
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
        
        <div className="order-check">

          <MyPageComponent title='주문/배송 조회'/>
          <MyPageComponent title='취소/반품/교환 조회'/>
        </div>
      </div>

      <div className="my-shopping-benefits">
        <h3>나의 쇼핑혜택</h3>
        <MyPageComponent title='쿠폰'/>
        <MyPageComponent title='마일리지'/>
      </div>

      <div className="shopping-activities">
        <h3>나의 쇼핑활동</h3>
        <MyPageComponent title='나의 찜'/>
        <MyPageComponent title='최근 본 상품'/>
        <MyPageComponent title='상품리뷰'/>
        <MyPageComponent title='상품문의'/>
        <MyPageComponent title='1:1 문의내역'/>
      </div>

      <div className="my-Profile">
      <h3>나의 회원정보</h3>
        <MyPageComponent title='회원 정보 관리'/>
        <MyPageComponent title='배송 정보 관리'/>
        <MyPageComponent title='공지사항'/>
      </div>

      {
        customerService.map((item, index) => {
          return(
            <Link className='customer-service'>
              <p>{item.title}</p>
              <Icon icon="iconamoon:arrow-right-2-light" style={{fontSize : '1.5rem'}}/>
            </Link>
          )
        })
      }
      <TabBar/>
    </div>
  );
};

export default MyPage;