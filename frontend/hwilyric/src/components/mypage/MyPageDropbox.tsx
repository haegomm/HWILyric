import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { downArrow, upArrow } from "../../assets/mypage/arrow";

import { lyricCategoryAtom } from '../../atoms/mypageAtom';
import { ArrowImage, DropboxSelect, DropboxOption } from "../../styles/mypageStyle";
import { ICategoryTypes } from "../../types/mypageType";

function MyPageDropbox() {
  const [category, setCategory] = useRecoilState(lyricCategoryAtom);
  const [isOpen, setIsOpen]  = useState(false)

  const lyricCategoryList = [
    { name: '전체', state: ''},
    { name: 'verse', state: 'verse'},
    { name: 'bridge', state: 'bridge'},
    { name: 'hook', state: 'hook'},
    { name: 'etc', state: 'etc'},
  ];
  
  const onDropHandler = (e: React.MouseEvent<HTMLSelectElement>) => {
    setIsOpen(!isOpen)
  }

  const onCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentCtgr = e.target.value
    setCategory(currentCtgr)
    console.log(currentCtgr)
  }

  // function onCategoryHandler(currentCtgr:ICategoryTypes, e: React.MouseEvent<HTMLOptionElement>) {
  //   setCategory(currentCtgr)
  //   setIsOpen(!isOpen)
  //   console.log(currentCtgr)
  // }

  return (
        <DropboxSelect onChange={onCategoryHandler}>
          {lyricCategoryList.map((ctgr, index) => (
              <DropboxOption
              key={index}
              value={ctgr.state}
              // name={ctgr.name}
              >
              {ctgr.name}
            </DropboxOption>
          ))}
        </DropboxSelect>
  )
}

export default MyPageDropbox
