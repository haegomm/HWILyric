import React from 'react'
import SidebarRecommendSimilar from './SidebarRecommendSimilar'
import SidebarRecommendRhyme from './SidebarRecommendRhyme'
import SidebarRecommendRandom from './SidebarRecommendRandom'
import { useRecoilValue } from 'recoil'
import { getErrorMessageAtom, keywordModeAtom } from '../../../atoms/sidebarAtoms'
import SidebarRecommendHeader from './SidebarRecommendHeader'

function SidebarRecommend() {
  const keywordMode = useRecoilValue(keywordModeAtom)
  const errorMessage = useRecoilValue(getErrorMessageAtom)

  return (
    <div>
      <SidebarRecommendHeader />
      {(keywordMode === 'similar') ? 
      <SidebarRecommendSimilar />
      : <SidebarRecommendRhyme />}
      <p>{errorMessage}</p>
      <SidebarRecommendRandom />
    </div>
  )
}

export default SidebarRecommend