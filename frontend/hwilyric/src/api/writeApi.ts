import { axios } from './https'
import { ISaveNoteType } from '../types/noteType'
import { ICheckSimilarity } from '../types/sidebarType'

// 자동저장
export async function saveNote(body: ISaveNoteType) {
    try {
        const res = await axios.post(`api/notes/insert`, body)
        const data = res.data
        console.log("저장 성공!",data)
        return data
    } catch(err) {
        console.log("저장 안돼ㅠ", err)
    }
}

// 유사도 검사
export async function checkSimilarity(body: ICheckSimilarity) {
    try {
        const res = await axios.post(`api/similarity`, body)
        const data = res.data
        console.log("췤췤 성공", data)
        return data
    } catch (err) {
        console.log("췤췤 실패", err)
    }
}