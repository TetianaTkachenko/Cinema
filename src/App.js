import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MovieContainer from './components/Movies/MovieContainer';
import Person from './components/Person/Person';
import Trending from './components/Trending/Trending';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/movies/*' element={<MovieContainer />} />
        <Route path='/trending/*' element={<Trending />} />
        <Route path='/persons/*' element={<Person />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
