import React, { useEffect } from 'react'
import { DropboxOption, DropboxSelect } from '../../../styles/mypageStyle';
import { useRecoilState } from 'recoil';
import { sidebarCategoryAtom } from '../../../atoms/sidebarAtoms';

function SidebarMyLyricsSelect() {
  const [category, setCategory] = useRecoilState(sidebarCategoryAtom);

  const lyricCategoryList = [
    { name: '----- 카테고리 -----', state: ''},
    { name: 'verse', state: 'verse'},
    { name: 'bridge', state: 'bridge'},
    { name: 'hook', state: 'hook'},
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
    <DropboxSelect width='50%' onChange={onCategoryHandler}>
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

export default SidebarMyLyricsSelect