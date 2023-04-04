import React, { useEffect } from 'react'
import { RandomHeader, RecommendBody, WordContainer, WordItem } from '../../../styles/recommendStyle'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getErrorMessageAtom, keywordListAtom } from '../../../atoms/sidebarAtoms'

function SidebarRecommendSimilar() {
  const [wordList, setWordList] = useRecoilState(keywordListAtom)
  const errorMessage = useRecoilValue(getErrorMessageAtom)

  useEffect(() => {
    setWordList([])
  }, [])

  return (
    <RecommendBody>
      <RandomHeader>
        <span>유사 키워드</span>
      </RandomHeader>
      <WordContainer>
        {wordList.map((word:string) => (
          <WordItem key={word}>{word}</WordItem>
        ))}
        <p>{errorMessage}</p>
      </WordContainer>
    </RecommendBody>
  )
}

export default SidebarRecommendSimilar