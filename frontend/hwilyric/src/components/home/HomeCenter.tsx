import React from 'react'
import HomeCenterTopic from './HomeCenterTopic'
import HomeCenterImg from './HomeCenterImg'
import { HomeCenterContainer } from '../../styles/homeStyle'

function HomeCenter() {

  return (
    <HomeCenterContainer>
      <HomeCenterImg />
      <HomeCenterTopic />
    </HomeCenterContainer>
  )
}

export default HomeCenter