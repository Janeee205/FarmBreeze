import React from 'react';

const Footer = () => {
  const footer = {
    footer : {
      marginTop : '5rem',
      padding : '1rem',
      color : '#fff',
      backgroundColor : 'var(--main-color)',
      lineHeight : '1.5rem'
    },
    footerLink : {
      display : 'flex',
      fontSize : '1.2rem',
      fontWeight : '700',
      marginBottom : '1.5rem'
    }
  }
  return (
    <footer style={footer.footer}>
      <div style={footer.footerLink}>
        <p style={{marginRight : '1.2rem'}}>이용약관</p>
        <p>개인정보처리방침</p>
      </div>
      <div style={{marginBottom : '1rem'}}>
        <p>주식회사 팜브리즈 | 대표자 : 빅픽처</p>
        <p>사업자등록번호 : 201-41-85240</p>
        <p>주소 : 대전광역시 동구 옛신탄진로 67번길, 4층(홍도동)</p>
      </div>
      <div style={{marginBottom : '3rem'}}>
        <p>팩스 : 070-581-4102 | 이메일 : cksal8449@naver.com</p>
        <p>고객센터 : 070-3941-7720</p>
      </div>
      <div style={{fontSize : '0.9rem'}}>
        <p>사이트 내에는 팜브리즈(주)에 입점한 개별판매자가 판매하는 상품이 포함되어 있습니다.</p>
        <p>해당 상품의 경우  팜브리즈(주)는 통신판매중개자로서 판매 당사자가 아니며, 상품정보 및 거래 등에 대한 책임을 지지 않습니다.</p>
      </div>
    </footer>
  );
};

export default Footer;