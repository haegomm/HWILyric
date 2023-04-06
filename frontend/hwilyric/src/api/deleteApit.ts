import { axios } from './https';

export async function deleteNote(noteId: string) {
  try{
    const res = await axios.delete(`api/notes?noteId=${noteId}`)
    return res
  } catch(err) {
    alert('삭제에 실패했습니다. 다시 한 번 시도해주세요')
    return null
  }
}