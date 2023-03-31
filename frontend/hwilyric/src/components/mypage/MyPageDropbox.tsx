import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { downArrow, upArrow } from "../../assets/mypage/arrow";

import { lyricCategoryAtom } from '../../atoms/mypageAtom';
import { ArrowImage, DropboxDiv } from "../../styles/mypageStyle";
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
  
  const onDropHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen)
  }

  function onCategoryHandler(currentCtgr:ICategoryTypes, e: React.MouseEvent<HTMLDivElement>) {
    setCategory(currentCtgr)
    setIsOpen(!isOpen)
  }

  return (
    <DropboxDiv>
      <div
      className={`select-box ${isOpen ? 'open' : ''}`}
      onClick={onDropHandler}>
        {category.name}
        {isOpen ? 
          <ArrowImage src={upArrow} />
          : <ArrowImage src={downArrow} />
        }
      </div>
      { isOpen && (
        <div className="category-drop">
          {lyricCategoryList.map((ctgr) => (
            <div
            className="categry-item"
            key="ctgr.state"
            onClick={(e) => onCategoryHandler(ctgr, e)}
            >
              {ctgr.name}
            </div>
          ))}
        </div>
      )

      }
    </DropboxDiv>
  )
}

export default MyPageDropbox
