import React from 'react'
import SidebarRecommendKeword from './SidebarRecommendKeword'
import SidebarRecommendRhyme from './SidebarRecommendRhyme'
import SidebarRecommendRandom from './SidebarRecommendRandom'

function SidebarRecommend() {
  return (
    <div>
      <SidebarRecommendKeword />
      <SidebarRecommendRhyme />
      <SidebarRecommendRandom />
    </div>
  )
}

export default SidebarRecommend