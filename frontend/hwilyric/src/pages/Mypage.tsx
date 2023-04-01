import React from "react";
import { useRecoilValue } from "recoil";

import MyPageLyricList from "../components/mypage/MyPageLyricList";
import MyPageProfile from "../components/mypage/MyPageProfile";
import { lyricCategoryAtom } from "../atoms/mypageAtom"; 
import MyPageFilterList from "../components/mypage/MyPageFilterList";
import { MyPageContainer } from "../styles/mypageStyle";
import MyPageListHeader from "../components/mypage/MyPageListHeader";

function Mypage() {
  const Category = useRecoilValue(lyricCategoryAtom)

  return (
      <MyPageContainer>
        <MyPageProfile />
        <MyPageListHeader />
        {(Category.state === '') ? 
          <MyPageLyricList />
          : <MyPageFilterList />
        }
      </MyPageContainer>
  )
}

export default Mypage