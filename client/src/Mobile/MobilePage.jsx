import React from "react";
import "./MobilePage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Page/MainPage";
import CategoryPage from "./Page/CategoryPage";
import ProductDetailsPage from "./Page/ProductDetailsPage";
import JoinPage from "./Page/JoinPage";
import LoginPage from "./Page/LoginPage";
import LoginPage2 from "./Page/LoginPage2";
import LeavePage from "./Page/LeavePage";
import CartPage from "./Page/CartPage";
import MyPage from "./Page/MyPage";
import MyInfoPage from "./Page/MyInfoPage";
import MyInfoPage2 from "./Page/MyInfoPage2";
import LikePage from "./Page/LikePage";
import SearchPage from "./Page/SearchPage";
import PaymentPage from "./Page/PaymentPage";

const MobilePage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="Category" element={<CategoryPage />} />
          <Route path="ProductDetails" element={<ProductDetailsPage />} />
          <Route path="Join" element={<JoinPage />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="Login2" element={<LoginPage2 />} />
          <Route path="Leave" element={<LeavePage />} />
          <Route path="Cart" element={<CartPage />} />
          <Route path="MyPage" element={<MyPage />} />
          <Route path="MyInfoPage2" element={<MyInfoPage2 />} />
          <Route path="MyInfo" element={<MyInfoPage />} />
          <Route path="Like" element={<LikePage />} />
          <Route path="Search" element={<SearchPage />} />
          <Route path="Payment" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MobilePage;
