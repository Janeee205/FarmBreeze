import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import './SearchPage.css';
// import TabBar from 'components/TabBar';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [recommendedSearches, setRecommendedSearches] = useState([]);
  const [trendingSearches, setTrendingSearches] = useState([]);

  // 초기 데이터 로딩
  useEffect(() => {
    // 서버에서 초기 데이터 가져오기 (예: 최근 검색어, 추천 검색어, 급상승 검색어)
    // axios 또는 fetch를 사용하여 데이터를 가져올 수 있습니다.
    axios.get('/api/initial-data').then((response) => {
      setRecentSearches(response.data.recentSearches);
      setRecommendedSearches(response.data.recommendedSearches);
      setTrendingSearches(response.data.trendingSearches);
    });
  }, []);

  // 검색어 입력 시 검색 결과 가져오기
  useEffect(() => {
    if (searchQuery) {
      // 서버에서 검색 결과 가져오기
      axios.get(`/api/search?query=${searchQuery}`).then((response) => {
        setSearchResults(response.data.results);
      });
    } else {
      // 검색어가 없을 때 초기 데이터로 재설정
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className='search-wrap'>
      <div className='search-header'>
        <div className='search-back'>
          <Icon icon="maki:arrow" color="#005792" hFlip={true} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="검색어를 입력해주세요"
        />
      </div>
      {searchQuery === '' && (
        <div>
          <div>
            <h2>최근 검색어</h2>
            <span>검색어 전체 삭제</span>
          </div>
          <ul>
            {/* {recentSearches.map((search) => (
              <li key={search.id}>{search.query}</li>
            ))} */}
            {recentSearches.slice(0, 10).map((search) => (
              <li key={search.id}>{search.query}</li>
            ))}
          </ul>
          <h2>추천 검색어</h2>
          <ul>
            {/* {recommendedSearches.map((search) => (
              <li key={search.id}>{search.query}</li>
            ))} */}
            {recommendedSearches.slice(0, 3).map((search) => (
              <li key={search.id}>{search.query}</li>
            ))}
          </ul>
          <h2>급상승 검색어</h2>
          <ul>
            {/* {trendingSearches.map((search) => (
              <li key={search.id}>{search.query}</li>
            ))} */}
            {Array.from({ length: 5 }, (search, index) => (
              <li key={index}>{trendingSearches[0].query}</li>
            ))}
          </ul>
        </div>
      )}
      {searchResults.length > 0 && (
        <div>
          <h2>검색 결과</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    {/* <TabBar/> */}
    </div>
  );
}

export default SearchPage;