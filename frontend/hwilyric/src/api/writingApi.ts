import { ISimilarityTypes } from '../types/writingType'
import { axios, fileAxios } from './https'

// 자동저장
export async function saveNote(formData: FormData) {
  try {
      const res = await fileAxios.post(`api/notes/save`, formData)
      const data = res.data
      console.log("저장 성공!",data)
      return data
  } catch(err) {
      console.log("저장 안돼ㅠ", err)
  }
}

// 유사도 검사
export async function checkSimilarity(body: ISimilarityTypes) {
  try {
      const res = await axios.post(`api/similarity`, body)
      const data = res.data
      console.log("췤췤 성공", data)
      return data
  } catch (err) {
      console.log("췤췤 실패", err)
  }
}

export async function randomKeyword() {
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

export async function similarKeyword(word: String) {
  try{
    const res = await axios.get(`api/keywords/similarity/${word}`)
    const data = res.data
    return data
  } catch(err) {
    console.log('유사 키워드 못 받았단다')
    return null
  }
}

export async function getLyricList() {
  try{
    const res = await axios.get('api/notes/list')
    const data = res.data
    return data
  } catch(err) {
    console.log('리스트 못 받았단다')
    return null
  }
}
