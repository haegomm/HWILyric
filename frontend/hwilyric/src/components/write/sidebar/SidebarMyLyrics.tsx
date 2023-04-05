import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IGetILyricInfoTypes } from '../../../types/mypageType'
import { ILyricBlockTypes } from '../../../types/writingType'
import { LyricListBodyItem, LyricListBodyItemDiv, LyricText } from '../../../styles/mypageStyle'
import { useRecoilValue } from 'recoil'
import { getLyricList } from '../../../api/writingApi'
import MyPageDropbox from '../../mypage/MyPageDropbox'
import { IsLoginAtom } from '../../../atoms/userAtom'
import { MyLyricBody, MyLyricListBodyItemContent, MyLyricThumbnail } from '../../../styles/MyLyricStyle'
import { sidebarCategoryAtom } from '../../../atoms/sidebarAtoms'
import SidebarMyLyricsSelect from './SidebarMyLyricsSelect'
import { LoginRecButton, NotLoggedInDiv } from '../../../styles/recommendStyle'
import { Button, SaveButton } from '../../../styles/common/ButtonStyle'

function SidebarMyLyrics() {
  const [myLyrics, setMyLyrics] = useState([])
  const [nullLyrics, setNullLyrics] = useState('')
  const isLogin = useRecoilValue(IsLoginAtom)

  const currentCategory = useRecoilValue(sidebarCategoryAtom)

  async function getMyLyrics() {
    const lyricList = await getLyricList()
    if (lyricList !== null) {
      const sortedLyrics = lyricList.slice(0).sort((a: IGetILyricInfoTypes, b: IGetILyricInfoTypes) => {
        return new Date(b.updatedDate).valueOf() - new Date(a.updatedDate).valueOf();})
        setMyLyrics(sortedLyrics)
    } else {
      console.log('')
      setNullLyrics('해당 카테고리의 가사가 없습니다')
    }
  }

  useEffect(() => {
    if (isLogin) {
    getMyLyrics()
    }
  }, [currentCategory])
  
  return (
    <MyLyricBody>
      {isLogin ? (
      <div>
      <SidebarMyLyricsSelect />
      <div>
        {nullLyrics === '' ?
          <div>
            {myLyrics.map((myLyric:IGetILyricInfoTypes) => (
              myLyric.lyricList.map((lyricCtgr: ILyricBlockTypes) => {
                if (lyricCtgr.type === currentCategory) {
                  return (
                    <LyricListBodyItem key={myLyric.id}>
                      <LyricListBodyItemDiv width='35%'>
                        <MyLyricThumbnail src={myLyric.thumbnail} />
                      </LyricListBodyItemDiv>
                      <MyLyricListBodyItemContent>                                 
                        <LyricText width='80%'>
                          <span>{myLyric.title}</span>
                        </LyricText>                                 
                        <LyricText width='90%'>
                          <span>{lyricCtgr.lyrics}</span>
                        </LyricText>
                      </MyLyricListBodyItemContent>
                    </LyricListBodyItem>
                  )
                }
              })
            ))}
          </div>
          : <LyricListBodyItem>
            {nullLyrics}
          </LyricListBodyItem>
        }
      </div>
    </div> ) : (
      <NotLoggedInDiv>
        <p>로그인하지 않으셨어요!</p>
        <br/>
        <p>로그인하고 더 많은 기능을 이용해보세요</p>
        <Link to="/login">
          <LoginRecButton>로그인</LoginRecButton>
        </Link>
      </NotLoggedInDiv>)
    }
    </MyLyricBody>
  )
}

export default SidebarMyLyrics