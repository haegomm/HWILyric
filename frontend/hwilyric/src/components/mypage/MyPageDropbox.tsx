import React, { useEffect, useState } from "react";
import { useRecoilState } from 'recoil';
import { downArrow, upArrow } from "../../assets/mypage/arrow";

import { lyricCategoryAtom } from '../../atoms/mypageAtom';
import { ArrowImage, DropboxSelect, DropboxOption } from "../../styles/mypageStyle";

function MyPageDropbox() {
  const [category, setCategory] = useRecoilState(lyricCategoryAtom);

  const lyricCategoryList = [
    { name: '전체', state: ''},
    { name: 'verse', state: 'verse'},
    { name: 'bridge', state: 'bridge'},
    { name: 'hook', state: 'hook'},
    { name: 'etc', state: 'etc'},
  ];
  
  const onCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentCtgr = e.target.value
    setCategory(currentCtgr)
    console.log(currentCtgr)
  }

  useEffect(()=> {
    setCategory('')
  }, [])

  return (
        <DropboxSelect width='5vw' onChange={onCategoryHandler}>
          {lyricCategoryList.map((ctgr, index) => (
              <DropboxOption
              key={index}
              value={ctgr.state}
              >
              {ctgr.name}
            </DropboxOption>
          ))}
        </DropboxSelect>
  )
}

export default MyPageDropbox
