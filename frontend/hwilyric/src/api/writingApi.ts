import { ISimilarityTypes } from '../types/writingType'
import { axios, fileAxios } from './https'

async function checkSimilarity(userLyricList: ISimilarityTypes) {
  try{
    const res = await axios.post('api/similarity', userLyricList)
    const data = res.data
    return data
  } catch(err) {
    console.log('유사도 검사 안됐단다')
    console.log(err)
    return err
  }
}

async function randomKeyword() {
  try{
    const res = await axios.get('api/keywords/random')
    const data = res.data
    return data
  } catch(err) {
    console.log('랜덤 키워드 못 받았단다')
    console.log(err)
    return err
  }
}

async function similarKeyword(word: String) {
  try{
    const res = await axios.get(`api/keywords/similarity/${word}`)
    const data = res.data
    return data
  } catch(err) {
    console.log('유사 키워드 못 받았단다')
    return null
  }
}

async function lyricList() {
  try{
    const res = await axios.get('api/notes/list')
    const data = res.data
    return data
  } catch(err) {
    console.log('리스트 못 받았단다')
    return null
  }
}

const writingApi = {
  checkSimilarity,
  randomKeyword,
  similarKeyword,
  lyricList,
}

export default writingApi