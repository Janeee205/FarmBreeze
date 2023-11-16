import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './TabBar.css';

const TabBar = () => {
  const location = useLocation();
  const [changeColor, setChangeColor] = useState(location.pathname);

  useEffect(() =>{
    setChangeColor(location.pathname);
  }, [ location ])

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

  const getPathMach = (location) => {
    return tabMenu.find((item) => item.to === location.pathname)
  }

  const pathMach = getPathMach(location);

  return (
    <div className='tab-bar'>
      {
        tabMenu.map((item, index) => {
          return(
            <div className={item.to === location.pathname ? 'tab-bar-item is-active' : 'tab-bar-item'} key={index}>
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