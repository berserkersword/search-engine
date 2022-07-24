import './App.css';
import axios from 'axios';
import Main from './pages/Main/Main';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from './pages/Data/Data';
import { Context } from './Context/Context';

function App() {
  const [querry, setQuerry] = useState({})
  const Search = (q) => {
    if (q) {
      const options = {
        method: 'GET',
        url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${q}`,
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'EU',
          'X-RapidAPI-Key': '2d04c8fe7dmsha351e7b3080b61cp1a8af9jsncefbf38edcd1',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        setQuerry(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }
    else {
      return null
    }
  }

  return (
    <Context.Provider value={{ querry, setQuerry, Search }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Main Search={Search} />} />
            <Route path='/search' element={<Data querry={querry} />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
