import React, { useEffect, useState } from 'react'
import { getRandomdWord } from '../../../api/writingApi';
import { IconImage } from '../../../styles/mypageStyle';
import { lightRefresh } from '../../../assets/icon/myButtons';
import { RandomHeader, RecommendBody, WordContainer, WordItem } from '../../../styles/recommendStyle';

function SidebarRecommendRandom() {
  const [wordList, setWordList] = useState([]);
  const [randomError, setRandomError] = useState('');

  async function refreshRandomWord() {
    const randomList = await getRandomdWord()
    if (randomList !== null) {
      setWordList(randomList)
      setRandomError('')
    } else {
      setRandomError('키워드를 가져오지 못했습니다. 다시 한 번 시도해주세요')
    }
  }
  useEffect(() => {
    refreshRandomWord()
  }, [])
  
  const onRefreshHandler = async (e: React.MouseEvent<HTMLImageElement>) => {
    refreshRandomWord()   
  }
  return (
    <RecommendBody>
      <RandomHeader>
        <span>랜덤 키워드&nbsp;</span>
        <IconImage src={lightRefresh} onClick={onRefreshHandler}/>
      </RandomHeader>
      <WordContainer>
        {wordList.map((word:string) => (
          <WordItem key={word}>{word}</WordItem>
        ))}
      </WordContainer>
      <p>{randomError}</p>
    </RecommendBody>
  )
}

export default SidebarRecommendRandom