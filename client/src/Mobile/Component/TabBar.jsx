import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './TabBar.css';

const TabBar = () => {
  const tabMenu = [
    {
      title : '카테고리',
      icon : 'ci:hamburger-md',
      to : '/Category'
    },
    {
      title : '검색',
      icon : 'tdesign:search',
      to : '/Search'
    },
    {
      title : '홈',
      icon : 'material-symbols:logo-dev-outline',
      to : '/'
    },
    {
      title : '좋아요',
      icon : 'tabler:heart',
      to : '/Like'
    },
    {
      title : '마이페이지',
      icon : 'ion:person-outline',
      to : '/MyPage'
    }
  ]

  return (
    <div className='tab-bar'>
      {
        tabMenu.map((item, index) => {
          return(
            <div className='tab-bar-item' key={index}>
              <Link to={item.to}>
                <Icon icon={item.icon} />
              </Link>
              <p>{item.title}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default TabBar;