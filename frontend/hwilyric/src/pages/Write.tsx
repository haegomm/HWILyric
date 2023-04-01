import { WriteBox } from "../styles/writeStyle"
import WriteNote from "../components/write/WriteNote"
import WriteSidebar from "../components/write/WriteSidebar"

function Write() {
  return (
    <WriteBox>
      <WriteSidebar />
      <WriteNote />
    </WriteBox>
  )
}

export default Write