import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';

import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Write from './pages/Write';
import DataVisualize from './pages/DataVisualize';
import Login from './pages/Login';
import LoginKakao from './components/login/LoginKakao';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import ProfileModification from './pages/ProfileModification';
import HWILyric from './pages/Hwilyric';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='*' element={<HWILyric />} />
            <Route path='/zslkdrj' element={<Home />} />
            <Route path='/write/sdalkfjadslkfj' element={<Write />} />
            {/* <Route path='/datavisualize' element={<DataVisualize />} /> */}
            <Route path='/login/dlkfjsaldkfj' element={<Login />} />
            <Route path="oauth2/code/kakao" element={<LoginKakao />} />
            <Route path='/signup/dkfjdlksj' element={<Signup />} />
            <Route path='/mypage/dsajhfawjehdg' element={<Mypage />} />
            <Route path='/profilemodification/sajhdgdjakhsd' element={<ProfileModification />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
