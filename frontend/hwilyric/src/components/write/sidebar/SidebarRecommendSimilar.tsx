import { useEffect } from 'react'
import { RandomHeader, RecommendBody, WordContainer, WordItem } from '../../../styles/recommendStyle'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getErrorMessageAtom, keywordListAtom } from '../../../atoms/sidebarAtoms'
import { isLoadingState } from '../../../atoms/sidebarAtoms'
import { isDarkModeState } from '../../../atoms/noteAtoms'
import { DarkLodaing, LightLodaing } from '../../../assets/writeSideBar/writeImg'

function SidebarRecommendSimilar() {
  const [wordList, setWordList] = useRecoilState(keywordListAtom)
  const errorMessage = useRecoilValue(getErrorMessageAtom)

  const isLoading = useRecoilValue(isLoadingState)
  const isDarkMode = useRecoilValue(isDarkModeState)

  useEffect(() => {
    setWordList([])
  }, [])

  return (
    <RecommendBody>
      <RandomHeader>
        <span>연관 키워드</span>
      </RandomHeader>
      { isLoading ? (<WordContainer>
        <img src={isDarkMode ? DarkLodaing : LightLodaing} style={{ margin: '0px', width: '5vw' }} alt="loading" />
      </WordContainer>) : (<WordContainer>
        {wordList.map((word:string) => (
          <WordItem key={word}>{word}</WordItem>
        ))}
        <p>{errorMessage}</p>
      </WordContainer>)}
      
    </RecommendBody>
  )
}

export default SidebarRecommendSimilar