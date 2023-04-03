import React from 'react'
import { RandomHeader, RecommendBody, WordContainer, WordItem } from '../../../styles/recommendStyle'
import { useRecoilValue } from 'recoil'
import { keywordListAtom } from '../../../atoms/sidebarAtoms'

function SidebarRecommendSimilar() {
  const wordList = useRecoilValue(keywordListAtom)
  return (
    <RecommendBody>
      <RandomHeader>
        <span>유사 키워드</span>
      </RandomHeader>
      <WordContainer>
        {wordList.map((word:string) => (
          <WordItem>{word}</WordItem>
        ))}
      </WordContainer>
    </RecommendBody>
  )
}

export default SidebarRecommendSimilar