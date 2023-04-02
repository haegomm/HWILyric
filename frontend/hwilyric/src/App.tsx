import React, { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { useRecoilValue } from "recoil";

import './App.css'
import { GlobalStyle } from "./theme/GlobalStyle"
import { darkTheme, lightTheme } from './theme/theme';
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Login from "./pages/Login";
import LoginKakao from "./components/login/LoginKakao";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import ProfileModification from "./pages/ProfileModification";
import HWILyric from "./pages/Hwilyric";
import { IsLoginAtom } from "./atoms/userAtom";
import { reissueToken } from "./api/userApi";

import DataVisualize from "./pages/DataVisualize";
import PrivateRoute from "./features/router";
import { AppDiv } from "./styles/common/AppStyle";
import { Reset } from "styled-reset";

function App() {
  const isLogin = useRecoilValue(IsLoginAtom);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const issueToken = async () => {
      console.log('토큰 한번 받아본다')
      const accessToken = await reissueToken();
      if (accessToken !== null) {
        console.log("토큰 재발급~~");
        window.localStorage.setItem("accessToken", accessToken);
      } else {
        console.log("토큰재발급 실패ㅜㅜ");
      }
    }
    setInterval(() => {
      if (isLogin) {
        issueToken();
      }
    }, 900000);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle /> 
          <BrowserRouter>
            <Navbar toggleDarkMode={toggleDarkMode} />
            <AppDiv>
              <Routes>
                <Route path="*" element={<HWILyric />} />
                <Route path="/home" element={<Home />} />
                <Route path="/write" element={<Write />} />
                <Route path="/datavisualize" element={<DataVisualize />} />
                <Route path="/login" element={<Login />} />
                <Route path="oauth2/code/kakao" element={<LoginKakao />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route
                path="myvoca/mypage"
                element={
                  <PrivateRoute authenticated={isLogin} component={<Mypage />} />
                }
                /> */}
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/profilemodification" element={<ProfileModification />}
                />
              </Routes>
            </AppDiv>
          </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;