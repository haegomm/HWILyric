import React, { useEffect, useState } from 'react'
import { getRandomdWord } from '../../../api/writingApi';
import { async } from 'q';



function SidebarRecommendRandom() {
  const [wordList, setWordList] = useState([]);
  const [randomError, setRandomError] = useState('');

  async function refreshRandomWord() {
    const randomList = await getRandomdWord()
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
  
  const onRefreshHandler =async (e: React.MouseEvent<HTMLImageElement>) => {
    refreshRandomWord()   
  }
  return (
    <div>SidebarRecommendRandom</div>
  )
}

export default SidebarRecommendRandom