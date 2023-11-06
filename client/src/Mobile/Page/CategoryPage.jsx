import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './CategoryPage.css';
// import { Link } from 'react-router-dom';
import TabBar from '../Component/TabBar.jsx';

const CategoryPage = () => {
  const categories = [
    {
      emoji: <Icon icon="mdi:brightness-percent" color="#005792" />,
      name: '초특가행사제품',
      items: [
        '농식품부와 함께하는 20% 쿠폰 할인행사',
        '남녀노소 좋아하는 돈가스&햄 모음전',
        '새콤달콤한 맛의 향연 제철 과일 최대 25%',
      ],
    },
    {
      emoji: <Icon icon="fluent-emoji:leafy-green" />,
      name: '채소',
      items: [
        '친환경',
        '고구마·감자·당근',
        '시금치·쌈채소·나물',
        '브로콜리·파프리카·양배추',
        '양파·대파·마늘·대추',
        '오이·호박·고추',
        '냉동·이색·간편채소',
        '콩나물·버섯'
      ],
    },
    {
      emoji: <Icon icon="noto:red-apple" />,
      name: '과일·견과·쌀',
      items: [
        '제철과일',
        '국산과일',
        '수입과일',
        '간편과일',
        '냉동·건과일',
        '견과류',
        '쌀·잡곡'
      ],
    },
    {
      emoji: <Icon icon="fa6-solid:fish" color="#005792" />,
      name: '수산·해산·건어물',
      items: [
        '제철수산',
        '굴비·반건류',
        '오징어·낙지·문어',
        '새우·게·랍스터',
        '해산물·조개류',
        '수산가공품',
        '김·미역·해조류',
        '건어물·다시팩'
      ],
    },
    {
      emoji: <Icon icon="noto:cut-of-meat" />,
      name: '정육·계란',
      items: [
        '국내산소고기',
        '수입산소고기',
        '돼지고기',
        '계란류',
        '닭·오리고기',
        '양념육·돈까스',
        '양고기'
      ],
    },
    {
      emoji: <Icon icon="noto:pot-of-food" />,
      name: '국·반찬·메인요리',
      items: [
        '국·탕·찌개',
        '밀키트·메인요리',
        '밑반찬',
        '김치·젓갈·장류',
        '두부·어묵·부침개',
        '베이컨·햄·통조림',
      ],
    },
    {
      emoji: <Icon icon="emojione:green-salad" />,
      name: '샐러드·간편식',
      items: [
        '샐러드·닭가슴살',
        '도시락·밥류',
        '파스타·면류',
        '떡볶이·튀김·순대',
        '피자·핫도그·만두',
        '폭립·떡갈비·안주',
        '죽·스프·카레',
        '선식·시리얼',
      ],
    },
    {
      emoji: <Icon icon="mdi:noodles" color="#005792" />,
      name: '면·양념·오일',
      items: [
        '파스타·면류',
        '식초·소스·드레싱',
        '양념·액젓·장류',
        '식용유·참기름·오일',
        '소금·설탕·향신료',
        '밀가루·가루·믹스',
      ],
    },
    {
      emoji: <Icon icon="bx:coffee-togo" color="#005792" />,
      name: '생수·음료·우유·커피',
      items: [
        '생수·탄산수',
        '음료·주스',
        '우유·두유·요거트',
        '커피',
        '커피용품',
        '차'
      ],
    },
    {
      emoji: <Icon icon="game-icons:gingerbread-man" color="#005792" />,
      name: '간식·과자·떡',
      items: [
        '과자·스낵·쿠키',
        '초콜릿·젤리·캔디',
        '떡·한과',
        '아이스크림'
      ],
    },
    {
      emoji: <Icon icon="noto-v1:cheese-wedge" />,
      name: '베이커리·치즈·델리',
      items: [
        '식빵·빵류',
        '잼·버터·스프레드',
        '케이크·파이·디저트',
        '치즈',
        '델리',
        '올리브·피클'
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }
  };

  return (
    <div className='category-wrap'>
      <div className='category-header'>
        <h6>전체 목록</h6>
      </div>

      <div className='category-list'>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleCategoryClick(index)}>
              <span role="img" aria-label="Category">{category.emoji}</span> {category.name}
              {activeCategory === index ? ( 
              <Icon className='cate-arrow' icon="ri:arrow-up-s-line" color="#005792" />
              ) : (
                <Icon className='cate-arrow' icon="ri:arrow-up-s-line" color="#005792" vFlip={true} />
              )}
              {activeCategory === index && (
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <TabBar/>
    </div>
  );
};

export default CategoryPage;