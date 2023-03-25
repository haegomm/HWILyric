import BlockCreate from "../components/write/features/BlockCreate"
import BlockList from "../components/write/features/BlockList"
import NoteTitle from "../components/write/features/NoteTitle"

function Write() {
  return (
      <div>
        <h1>작사하기 페이지 입니다.</h1>
        <NoteTitle />
        <BlockList />
        <BlockCreate />
      </div>
  )
}

export default Write