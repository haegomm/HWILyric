import React, { useEffect, useState } from 'react'
import { recommendTopic } from '../../api/writingApi';
import { RandomHeader, RecommendBody, WordContainer, WordItem } from '../../styles/recommendStyle';
import { IconImage } from '../../styles/mypageStyle';
import { lightRefresh } from '../../assets/icon/myButtons';
import { HeaderP, HomeCenterWord, HomeWordItem, TopicHeader } from '../../styles/homeStyle';

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
    <HomeCenterWord>
      <TopicHeader>
        <HeaderP>휘리릭 추천 주제</HeaderP>
        <IconImage src={lightRefresh} onClick={onRefreshHandler}/>
      </TopicHeader>
      <WordContainer>
        {wordList.map((word:string) => (
          <HomeWordItem key={word}>{word}</HomeWordItem>
        ))}
      </WordContainer>
      <p>{randomError}</p>
    </HomeCenterWord>
  )
}

export default HomeCenterTopic
