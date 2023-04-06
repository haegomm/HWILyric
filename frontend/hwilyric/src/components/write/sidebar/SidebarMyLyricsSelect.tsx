import React, { useEffect } from 'react'
import { DropboxOption, DropboxSelect } from '../../../styles/mypageStyle';
import { useRecoilState } from 'recoil';
import { sidebarCategoryAtom } from '../../../atoms/sidebarAtoms';
import {MyLyricListDropboxSelect} from '../../../styles/MyLyricStyle';

function SidebarMyLyricsSelect() {
  const [category, setCategory] = useRecoilState(sidebarCategoryAtom);

  const lyricCategoryList = [
    { name: '---------- 카테고리 ----------', state: ''},
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
    <MyLyricListDropboxSelect width='50%' onChange={onCategoryHandler}>
    {lyricCategoryList.map((ctgr, index) => (
        <DropboxOption
        key={index}
        value={ctgr.state}
        >
        {ctgr.name}
      </DropboxOption>
    ))}
  </MyLyricListDropboxSelect>
  )
}

export default SidebarMyLyricsSelect