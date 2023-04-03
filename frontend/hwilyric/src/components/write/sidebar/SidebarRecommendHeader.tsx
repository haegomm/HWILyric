import React, { useEffect, useState } from 'react'
import { ButtonBox, RecommendBody, RecommendButton, SearchboxDiv, SearchboxInput } from '../../../styles/recommendStyle'
import { IconImage } from '../../../styles/mypageStyle'
import { SearchIcon } from '../../../assets/writeSideBar/search'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { getErrorMessageAtom, keywordListAtom, keywordModeAtom } from '../../../atoms/sidebarAtoms'
import { rhymeKeyword, similarKeyword } from '../../../api/writingApi'

function SidebarRecommendHeader() {
  const [keywordMode, setKeywordMode] = useRecoilState(keywordModeAtom)
  const setWordList = useSetRecoilState(keywordListAtom)
  const setErrorMessage = useSetRecoilState(getErrorMessageAtom)

  async function getSimilar(searchWord:string) {
    const newWordList = await similarKeyword(searchWord)
    if (newWordList !== null) {
      console.log(newWordList)
      setWordList(newWordList)
      setErrorMessage('')
    } else {
      console.log('유사실패ㅜ')
      setErrorMessage('유사 키워드를 찾지 못했습니다')
    }
  }

  async function getRhyme(searchWord:string) {
    const newWordList = await rhymeKeyword(searchWord)
    if (newWordList !== null) {
      console.log(newWordList)
      setWordList(newWordList)
      setErrorMessage('')
    } else {
      console.log('라임실패ㅜ')
      setErrorMessage('라임 키워드를 찾지 못했습니다')
    }
  }

  const onSearchHandler = async (e:React.MouseEvent<HTMLFormElement>) => {
    const searchWord = e.currentTarget.value
    console.log('검색어는',searchWord)
    if (keywordMode === 'similar') {
      getSimilar(searchWord)
    } else {
      getRhyme(searchWord)
    }
  }

  const onModeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const recommendMode = e.currentTarget.value
    console.log(recommendMode)
    setKeywordMode(recommendMode);
    setErrorMessage('키워드를 검색해주세요')
  };
  
  return (
    <RecommendBody>
      <ButtonBox>
        <RecommendButton type='button' value='similar' onClick={onModeHandler}>유사</RecommendButton>
        <RecommendButton type='button' value='rhyme' onClick={onModeHandler}>라임</RecommendButton>
      </ButtonBox>
      <SearchboxDiv>
        <form onSubmit={onSearchHandler}>
          <SearchboxInput type='text' placeholder='검색어를 입력하세요'/>
          <button>
            <IconImage src={SearchIcon} />
          </button>
        </form>
      </SearchboxDiv>
    </RecommendBody>
  )
}

export default SidebarRecommendHeader
