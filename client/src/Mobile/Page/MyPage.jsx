import React from 'react';
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
  return (
    <div>
      <Header title='마이페이지'/>
      <div className="my-order-info">
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
        <div className="orderheck">
          <MyPageComponent title='주문/배송 조회'/>
          <MyPageComponent title='취소/반품/교환 조회'/>
        </div>
      </div>
      <TabBar/>
    </div>
  );
};

export default MyPage;