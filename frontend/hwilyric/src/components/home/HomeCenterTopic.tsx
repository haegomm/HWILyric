import React, { useEffect, useState } from 'react'
import { recommendTopic } from '../../api/writingApi';
import { RandomHeader, RecommendBody, WordContainer, WordItem } from '../../styles/recommendStyle';
import { IconImage } from '../../styles/mypageStyle';
import { lightRefresh } from '../../assets/icon/myButtons';

function HomeCenterTopic() {
  const [wordList, setWordList] = useState([]);
  const [randomError, setRandomError] = useState('');

  async function refreshRandomWord() {
    const randomList = await recommendTopic()
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
        <span>휘리릭 추천 주제</span>
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

export default HomeCenterTopic
