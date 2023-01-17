import React, { useState, useEffect } from 'react';
import './App.css';
import SignInSide from './components/SignInSide';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import { Route, Routes } from "react-router-dom";
import SearchPage from './components/Search';
import UserGradientList from './components/UserGradientList';
import GradientList from './components/GradientList';
import SearchList from './components/SearchResult';
function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((message) => {
        console.log("finish");
        setMessage(message);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<SignInSide/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/user-gradient" element={<UserGradientList/>}/>
        <Route path="/gradient" element={<GradientList/>}/>
        <Route path="/search/result" element={<SearchList/>}/>
      </Routes>
    </div>
  );
}

export default App;
