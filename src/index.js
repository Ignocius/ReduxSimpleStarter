import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAdbNX6aIDhVGby1aMIYVAIEo7i-oqe1Ec';

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
