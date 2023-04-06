import { ISimilarityTypes } from '../types/writingType'
import { axios, fileAxios } from './https'

export async function saveNote(formData: FormData) {
  try {
      const res = await fileAxios.post(`api/notes/save`, formData)
      const data = res.data
      return data
  } catch (err) {
    return null
  }
}

export async function getLyricInfo(noteId: string|undefined) {
  try {
    const res = await axios.get(`api/notes/detail?noteId=${noteId}`)
    const data = res.data
    return data
  } catch (err) {
    return null
  }
}

export async function checkSimilarity(body: ISimilarityTypes) {
  try {
      const res = await axios.post(`api/similarity`, body)
      const data = res.data
      return data
  } catch (err) {
    return null
  }
}

export async function similarKeyword(word: String) {
  try{
    const res = await axios.get(`recommend/keywords/similarity/${word}`)
    const data = res.data
    return data
  } catch(err) {
    return null
  }
}

export async function rhymeKeyword(word: String) {
  try{
    const res = await axios.get(`api/keywords/rhyme/${word}`)
    const data = res.data
    return data
  } catch(err) {
    return null
  }
}

export async function getLyricList() {
  try{
    const res = await axios.get('api/notes/list')
    const data = res.data
    return data
  } catch(err) {
    return null
  }
}

export async function getRandomdWord() {
  try{
    const res = await axios.get('api/keywords/random')
    const wordList = res.data
    return wordList
  } catch(err) {
    return null
  }
}

export async function recommendTopic() {
  try{
    const res = await axios.get('api/keywords/topics')
    const wordList = res.data
    return wordList
  } catch(err) {
    return null
  }
}