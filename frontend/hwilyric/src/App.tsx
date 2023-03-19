import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';

import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Write from './pages/Write';
import DataVisualize from './pages/DataVisualize';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import ProfileModification from './pages/ProfileModification';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/write' element={<Write />} />
          {/* <Route path='/datavisualize' element={<DataVisualize />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/profilemodification' element={<ProfileModification />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
