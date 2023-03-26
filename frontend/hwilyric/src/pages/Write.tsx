import BlockCreate from "../components/write/features/BlockCreate"
import BlockList from "../components/write/features/BlockList"
import NoteTitle from "../components/write/features/NoteTitle"

function Write() {
  return (
    <div>
      <div className="titleBox">
        <NoteTitle />
      </div>
      <div className="BlocksBox">
          <BlockList />
          <BlockCreate />
      </div>
      </div>
  )
}

export default Write