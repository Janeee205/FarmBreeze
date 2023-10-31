import React from 'react';
import './MobilePage.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Page/MainPage';
import KategoriePage from './Page/KategoriePage';
import ProductDetailsPage from './Page/ProductDetailsPage';
import JoinPage from './Page/JoinPage';
import LoginPage from './Page/LoginPage';
import LeavePage from './Page/LeavePage';
import CartPage from './Page/CartPage';
import MyPage from './Page/MyPage';
import MyInfoPage from './Page/MyInfoPage';
import LikePage from './Page/LikePage';
import SearchPage from './Page/SearchPage';
import PaymentPage from './Page/PaymentPage';

const MobilePage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='Kategorie' element={<KategoriePage/>}/>
          <Route path='ProductDetails' element={<ProductDetailsPage/>}/>
          <Route path='Join' element={<JoinPage/>}/>
          <Route path='Login' element={<LoginPage/>}/>
          <Route path='Leave' element={<LeavePage/>}/>
          <Route path='Cart' element={<CartPage/>}/>
          <Route path='MyPage' element={<MyPage/>}/>
          <Route path='MyInfo' element={<MyInfoPage/>}/>
          <Route path='Like' element={<LikePage/>}/>
          <Route path='Search' element={<SearchPage/>}/>
          <Route path='Payment' element={<PaymentPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MobilePage;