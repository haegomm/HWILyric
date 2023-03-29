import React from 'react'
import ScrollHorizontal from 'react-scroll-horizontal';

import HomeQuickview from './HomeQuickview'
import DataVisualizeBlock from '../dataVisualize/DataVisualizeBlock';
function HomeContent() {
  return (
    <div id='scroll-horizontal' style={{ height: `30em` }}>
      <ScrollHorizontal>
        <HomeQuickview />
        <DataVisualizeBlock />
        <DataVisualizeBlock />
        <DataVisualizeBlock />
        <DataVisualizeBlock />
        <div>
          얍 여기가 마지막
        </div>
      </ScrollHorizontal>
    </div>
  )
}

export default HomeContent
