import SidebarRecommendSimilar from './SidebarRecommendSimilar'
import SidebarRecommendRhyme from './SidebarRecommendRhyme'
import SidebarRecommendRandom from './SidebarRecommendRandom'
import { useRecoilValue } from 'recoil'
import { keywordModeAtom } from '../../../atoms/sidebarAtoms'
import SidebarRecommendHeader from './SidebarRecommendHeader'
import { RecommendContent } from '../../../styles/recommendStyle'

function SidebarRecommend() {
  const keywordMode = useRecoilValue(keywordModeAtom)

  return (
    <RecommendContent>
      <SidebarRecommendHeader />
      {(keywordMode === 'similar') ? 
      <SidebarRecommendSimilar />
      : <SidebarRecommendRhyme />}
      <SidebarRecommendRandom />
    </RecommendContent>
  )
}

export default SidebarRecommend