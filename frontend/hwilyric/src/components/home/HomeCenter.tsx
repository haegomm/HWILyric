import React from 'react'
import { vinylColorDodge } from '../../assets/home/vinyl'
import { HomeImg } from '../../styles/homeStyle'

function HomeCenter() {
  return (
    <div>
      <div>HomeCenter</div>
      <HomeImg src={vinylColorDodge} />
      <div>
        <p>추천키워드 리스트</p>
        <div>
          {/* {topics.map((topic:any) => (
            <div>
              {topic}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default HomeCenter