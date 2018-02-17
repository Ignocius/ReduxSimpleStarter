import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAdbNX6aIDhVGby1aMIYVAIEo7i-oqe1Ec';

YTSearch({key: API_KEY, term: 'gopro'}, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar/ >
    </div>
  );
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
