import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Icon } from '@iconify/react';
import './SearchPage.css';
import { Link } from 'react-router-dom';
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
  ]);

  // 검색어 입력 시 검색 결과 가져오기
  const handleSearch = () => {
    if (searchQuery) {
      // 여기에서 서버 요청을 보내는 대신 하드 코딩한 검색 결과 데이터를 사용할 수 있습니다.
      setSearchResults([
        { id: 1, title: 'Search Result 1' },
        { id: 2, title: 'Search Result 2' },
        // 추가 데이터 추가 가능
      ]);
    } else {
      // 검색어가 없을 때 초기 데이터로 재설정
      setSearchResults([]);
    }
  };

  // // 초기 데이터 로딩
  // useEffect(() => {
  //   // 서버에서 초기 데이터 가져오기 (예: 최근 검색어, 추천 검색어, 급상승 검색어)
  //   // axios 또는 fetch를 사용하여 데이터를 가져올 수 있습니다.
  //   axios.get('/api/initial-data').then((response) => {
  //     setRecentSearches(response.data.recentSearches);
  //     setRecommendedSearches(response.data.recommendedSearches);
  //     setTrendingSearches(response.data.trendingSearches);
  //   });
  // }, []);

  // 검색어 입력 시 검색 결과 가져오기
  useEffect(() => {
    if (searchQuery) {
      // 서버에서 검색 결과 가져오기
      // axios.get(`/api/search?query=${searchQuery}`).then((response) => {
      //   setSearchResults(response.data.results);
      // });
      setSearchResults([
        { id: 1, title: 'Search Result 1' },
        { id: 2, title: 'Search Result 2' },
      ]);
    } else {
      // 검색어가 없을 때 초기 데이터로 재설정
      setSearchResults([]);
    }
  }, [searchQuery]);

  // 검색어 삭제 이벤트 핸들러
  const handleClearSearch = () => {
    setSearchQuery(''); // 검색어를 빈 문자열로 설정하여 삭제
  };

  // 최근 검색어 전체 삭제 이벤트 핸들러
  const handleClearRecentSearches = () => {
    setRecentSearches([]); // 최근 검색어 목록을 빈 배열로 설정하여 삭제
  };

  const inputClassName = searchResults.length > 0 ? 'active' : '';

  // 페이지를 뒤로 가는 함수
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className='search-wrap'>
      <div className='search-header'>
        <div className='search-back' onClick={goBack}>
          <Icon icon="maki:arrow" color="#005792" hFlip={true} />
        </div>
        <Icon className='search-icon' icon="material-symbols:search" color="#5e9fc3" height='26px' />
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
            <span onClick={handleClearRecentSearches}>검색어 전체 삭제</span>
          </div>
          <ul className='search-new-item'>
            {/* {recentSearches.map((search) => (
              <li key={search.id}>{search.query}</li>
            ))} */}
            {recentSearches.slice(0, 10).map((search) => (
              <li key={search.id}>{search.query} X</li>
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
            <Icon className='search-up-icon' icon="mingcute:question-fill" color="#005792" height='20px' />
          </div>
          {/* <ul className='search-up'>
            {Array.from({ length: 5 }, (search, index) => (
              <li key={index}>{index+1}{'   '}{trendingSearches[index].query}</li>
            ))}
          </ul> */}
          <ul className='search-up-item'>
            {trendingSearches.length > 0 ? (
              trendingSearches.slice(0, 5).map((search, index) => (
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
          <Icon className='search-close' icon="octicon:x-12" color="#5e9fc3" height='20px' onClick={handleClearSearch} />
          <Link to="/Cart">
            <span className='search-cart-count'>3</span>
            <Icon className='search-cart' icon="ion:cart-outline" color="#005792" height='30px' />
          </Link>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    <TabBar/>
    </div>
  );
}

export default SearchPage;