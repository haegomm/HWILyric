import React, { useEffect, useState } from 'react'
import { recommendTopic } from '../../api/writingApi';
import { RandomHeader, RecommendBody, WordContainer, WordItem } from '../../styles/recommendStyle';
import { IconImage } from '../../styles/mypageStyle';
import { lightRefresh } from '../../assets/icon/myButtons';
import { HeaderP, HomeCenterWord, HomeWordItem, TopicHeader } from '../../styles/homeStyle';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { isModifyingAtom } from '../../atoms/mypageAtom';
import { blockListState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState, titleState } from '../../atoms/noteAtoms';
import { memoState } from '../../atoms/sidebarAtoms';
import { useNavigate } from 'react-router-dom';

function HomeCenterTopic() {
  const [wordList, setWordList] = useState([]);
  const [randomError, setRandomError] = useState('');
  const isModifying = useSetRecoilState(isModifyingAtom);
  const setTitle = useSetRecoilState(titleState);
  const resetNoteId = useResetRecoilState(noteIdState);
  const resetBlockList = useResetRecoilState(blockListState);
  const resetMemo = useResetRecoilState(memoState)
  const resetThumbnail = useResetRecoilState(noteThumbnailUrlState)
  const resetThumbnailFile = useResetRecoilState(noteThumbnailFileState)

  const navigate = useNavigate()

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

  const onRecommendHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const word = e.currentTarget.id
    isModifying(true)
    setTitle(word)
    resetNoteId()
    resetBlockList()
    resetMemo()
    resetThumbnail()
    resetThumbnailFile()
    navigate('/write')
  }
  return (
    <HomeCenterWord>
      <TopicHeader>
        <HeaderP>휘리릭 추천 주제</HeaderP>
        <IconImage src={lightRefresh} onClick={onRefreshHandler}/>
      </TopicHeader>
      <WordContainer>
        {wordList.map((word:string) => (
          <HomeWordItem key={word} id={word} onClick={onRecommendHandler}>{word}</HomeWordItem>
        ))}
      </WordContainer>
      <p>{randomError}</p>
    </HomeCenterWord>
  )
}

export default HomeCenterTopic
