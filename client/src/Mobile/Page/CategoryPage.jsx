import React from 'react';
import { Icon } from '@iconify/react';
import './CategoryPage.css';
// import TabBar from 'components/TabBar';

const CategoryPage = () => {
  return (
    <div>
      <div className='Category-header'>
        <h5>전체 목록</h5>
        <Icon icon="grommet-icons:cart" color="white" />
      </div>
      {/* <TabBar/> */}
    </div>
  );
};

export default CategoryPage;