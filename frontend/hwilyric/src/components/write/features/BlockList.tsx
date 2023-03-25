import { useRecoilValue } from "recoil"
import { blockListState, BlockData } from "../../../atoms/BlockAtoms"
import BlockItem from "./BlockItem"

function BlockList() {

    const blockList = useRecoilValue(blockListState)

    return (
        <div className="blockListBox">
            {
                blockList.length > 0 ? blockList.map((block: BlockData) => {
                    return (
                        <BlockItem
                            key={block.id}
                            {...block}
                        />
                    )
                }) : (
                    <div>
                        가사를 자유롭게 작사해보세요🎶      
                    </div>
                )
            }
        </div>
    )
}

export default BlockList