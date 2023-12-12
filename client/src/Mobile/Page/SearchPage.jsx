import React from 'react';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './SearchPage.css';
import ProductItem from '../Component/ProductItem.jsx';
import Top from '../Component/Top.jsx';
import TabBar from '../Component/TabBar.jsx';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([
    // 하드 코딩한 최근 검색어 데이터
    { id: 1, query: '만두' },
    { id: 2, query: '아보카도' },
  ]);
  const [recommendedSearches, setRecommendedSearches] = useState([
    // 하드 코딩한 추천 검색어 데이터
    { id: 1, query: '슈퍼빅세일특가' },
    { id: 2, query: '크림치즈' },
    { id: 3, query: '갈비찜' },
  ]);
  const [trendingSearches, setTrendingSearches] = useState([
    // 하드 코딩한 급상승 검색어 데이터
    { id: 1, query: '종이호일' },
    { id: 2, query: '딸기쨈' },
    { id: 3, query: '바나나' },
    { id: 4, query: '초코우유' },
    { id: 5, query: '유정란' },
    { id: 6, query: '꿀고구마' },
    { id: 7, query: '감자' },
    { id: 8, query: '핫도그' },
    { id: 9, query: '피자' },
    { id: 10, query: '콜라' },
  ]);

// 서버에서 product 데이터를 가져와서 setSearchResults로 상태 업데이트
const handleSearch = () => {
  if (searchQuery) {
    // 여기에서 서버 요청을 보내는 대신 백엔드 서버의 엔드포인트를 호출합니다.
    // 프록시 설정으로 "/api/products"는 실제로 http://localhost:5000/api/products로 전달됩니다.
    fetch('/api/products', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(error => console.error('Error fetching products:', error));
  } else {
    // 검색어가 없을 때 초기 데이터로 재설정
    setSearchResults([]);
  }
};

  useEffect(() => {
    // 서버에서 product 데이터를 가져와서 setSearchResults로 상태 업데이트
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // 검색어 삭제 이벤트 핸들러
  const handleClearSearch = () => {
    setSearchQuery(''); // 검색어를 빈 문자열로 설정하여 삭제
  };

  // 최근 검색어 전체 삭제 이벤트 핸들러
  const handleClearRecentSearchesAll = () => {
    setRecentSearches([]); // 최근 검색어 목록을 빈 배열로 설정하여 삭제
  };
  const handleClearRecentSearches = (id) => {
    // 선택된 최근 검색어 ID를 기준으로 검색어를 필터링합니다.
    const updatedRecentSearches = recentSearches.filter(search => search.id !== id);
    setRecentSearches(updatedRecentSearches);
  };

  const inputClassName = searchResults.length > 0 ? 'active' : '';

  // 페이지를 뒤로 가는 함수
  const goBack = () => {
    window.history.back();
  };

  
  // 정렬 방식에 대한 상태
  const [sortType, setSortType] = useState('');
  const [activeSort, setActiveSort] = useState(null);

  // 검색 결과 네비게이션 항목
  const navigationItems = [
    '총 개수',
    '추천순',
    '카테고리',
    '브랜드',
    '가격',
    '혜택',
    '유형',
  ];

  // 네비게이션 항목 클릭 시 정렬 수행
  const handleNavigationClick = (item, index) => {
    // 클릭된 항목에 따라 정렬 방식을 설정
    setSortType(item);
    // 화살표
    handleSortClick(index);
    // 정렬 로직을 수행할 함수 호출
    performSorting(item);
  };

  // 정렬 로직을 수행할 함수
const performSorting = (sortType) => {
  const sortedResults = [...searchResults].filter(result => result.category);

  switch (sortType) {
    case '총 개수':
      // 여기에 총 개수에 대한 정렬 로직을 추가합니다.
      sortedResults.sort((a, b) => {
        return /* 총 개수에 대한 비교 로직 */;
      });
      break;
    case '추천순':
      // 여기에 추천순에 대한 정렬 로직을 추가합니다.
      sortedResults.sort((a, b) => {
        return /* 추천순에 대한 비교 로직 */;
      });
      break;
    case '카테고리':
      // 여기에 카테고리에 대한 정렬 로직을 추가합니다.
      sortedResults.sort((a, b) => {
        return a.category.localeCompare(b.category);
      });
      break;
    case '브랜드':
      // 여기에 브랜드에 대한 정렬 로직을 추가합니다.
      sortedResults.sort((a, b) => {
        return a.brand.localeCompare(b.brand);
      });
      break;
    case '가격':
      // 여기에 가격에 대한 정렬 로직을 추가합니다.
      sortedResults.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case '혜택':
      // 여기에 혜택에 대한 정렬 로직을 추가합니다.
      sortedResults.sort((a, b) => {
        return /* 혜택에 대한 비교 로직 */;
      });
      break;
    case '유형':
      // 여기에 유형에 대한 정렬 로직을 추가합니다.
      sortedResults.sort((a, b) => {
        return /* 유형에 대한 비교 로직 */;
      });
      break;
    default:
      break;
  }

  setSearchResults(sortedResults);
};


  const handleSortClick = (index) => {
    if (activeSort === index) {
      setActiveSort(null);
    } else {
      setActiveSort(index);
    }
  };

  return (
    <div className='search-wrap'>
      <div className='search-header'>
        <div className='search-back' onClick={goBack}>
          <Icon icon="maki:arrow" color="#005792" hFlip={true} />
        </div>
        <Icon className='search-icon' icon="material-symbols:search" color="#5e9fc3" height='2rem' />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="검색어를 입력해주세요"
          className={inputClassName}
        />
      </div>
      {searchQuery === '' && (
        <div className='search-box'>
          <div className='search-new'>
            <h2>최근 검색어</h2>
            <span onClick={handleClearRecentSearchesAll}>검색어 전체 삭제</span>
          </div>
          <ul className='search-new-item'>
            {/* {recentSearches.map((search) => (
              <li key={search.id}>{search.query}</li>
            ))} */}
            {recentSearches.slice(0, 10).map((search) => (
              <li key={search.id}>
                {search.query}
                <span className="remove-search" onClick={() => handleClearRecentSearches(search.id)}> X</span>
              </li>
            ))}
          </ul>
          <h2>추천 검색어</h2>
          <ul className='search-goat'>
            {/* {recommendedSearches.map((search) => (
              <li key={search.id}>{search.query}</li>
            ))} */}
            {recommendedSearches.slice(0, 3).map((search) => (
              <li key={search.id}>{search.query}</li>
            ))}
          </ul>
          <div className='search-up'>
            <h2>급상승 검색어</h2>
            <Icon className='search-up-icon' icon="mingcute:question-fill" color="#005792" height='1.5rem' />
          </div>
          {/* <ul className='search-up'>
            {Array.from({ length: 5 }, (search, index) => (
              <li key={index}>{index+1}{'   '}{trendingSearches[index].query}</li>
            ))}
          </ul> */}
          <ul className='search-up-item'>
            {trendingSearches.length > 0 ? (
              trendingSearches.slice(0, 10).map((search, index) => (
                <li key={index}>
                  <span className='numbered-item'>{index + 1}</span>
                  {'　'}{search.query}</li>
              ))
            ) : (
              <li>No trending searches available.</li>
            )}
          </ul>
        </div>
      )}
      {searchResults.length > 0 && (
        <div className='search-results'>
          <Icon className='search-close' icon="octicon:x-12" color="#5e9fc3" height='1.5rem' onClick={handleClearSearch} />
          <Link to="/Cart">
            <span className='search-cart-count'>3</span>
            <Icon className='search-cart' icon="ion:cart-outline" color="#005792" height='3rem' />
          </Link>
          <div className='search-nav'>
            {/* 첫 번째 줄 */}
            <div className='search-nav-row-1'>
              {navigationItems.slice(0, 2).map((item, index) => (
                <span key={item} onClick={() => handleNavigationClick(item, index)}>
                  {item}
                  {item === '추천순' && (
                    <> 
                    {activeSort === index ? (
                      <Icon className='search-sort-arrow' icon="ri:arrow-up-s-line" color="#005792" />
                    ) : (
                      <Icon className='search-sort-arrow' icon="ri:arrow-up-s-line" color="#005792" vFlip={true} />
                    )}
                    </>
                  )}
                </span>
              ))}
            </div>
            {/* 두 번째 줄 */}
            <div className='search-nav-row-2'>
              {navigationItems.slice(2).map((item, index) => (
                <span key={item} onClick={() => handleNavigationClick(item, index)}>
                  {item}
                  {activeSort === index ? ( 
                    <Icon className='search-sort-arrow' icon="ri:arrow-up-s-line" color="#005792" />
                    ) : (
                    <Icon className='search-sort-arrow' icon="ri:arrow-up-s-line" color="#005792" vFlip={true} />
                    )
                  }
                </span>
              ))}
            </div>
          </div>
          <ul>
            {searchResults.map(product => (
              <ProductItem key={product._id} product={product} />
            ))}
          </ul>
        </div>
      )}
    <Top/>
    <TabBar/>
    </div>
  );
}

export default SearchPage;