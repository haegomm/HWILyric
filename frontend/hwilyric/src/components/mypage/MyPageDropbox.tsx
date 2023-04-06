import React, { useEffect } from "react";
import { useRecoilState } from 'recoil';

import { lyricCategoryAtom } from '../../atoms/mypageAtom';
import { DropboxSelect, DropboxOption } from "../../styles/mypageStyle";

function MyPageDropbox() {
  const [category, setCategory] = useRecoilState(lyricCategoryAtom);

  const lyricCategoryList = [
    { name: '전체', state: ''},
    { name: 'verse', state: 'verse'},
    { name: 'bridge', state: 'bridge'},
    { name: 'hook', state: 'hook' },
    { name: 'chrous', state: 'chrous'},
    { name: 'pre-chorus', state: 'pre-chorus'},
    { name: 'etc', state: 'etc'},
  ];
  
  const onCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentCtgr = e.target.value
    setCategory(currentCtgr)
  }

  useEffect(()=> {
    setCategory('')
  }, [])

  return (
        <DropboxSelect width='6vw' onChange={onCategoryHandler}>
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
