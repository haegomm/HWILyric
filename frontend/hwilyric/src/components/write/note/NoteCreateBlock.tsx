import { useState } from "react"
import { useRecoilState } from "recoil"
import { blockListState, blockIdState } from "../../../atoms/noteAtoms"
import { CreateBlockStyle } from "../../../styles/writeNoteStyle"
import { ILyricBlockTypes } from "../../../types/writingType"

function BlockCreate() {
    const [ blockList, setBlockList ] = useRecoilState<ILyricBlockTypes[]>(blockListState)
    const [ blockId, setBlockId ] = useRecoilState<number>(blockIdState)

    const [ blockType, setBlockType ] = useState<string>("verse")

    const selectBlockType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBlockType(event.target.value)
    }

    const onCreate = (): void => {
        
        const newBlock: ILyricBlockTypes = {
            blockId: blockId,
            type: blockType,
            lyrics: ""
        }
        setBlockId(() => blockId + 1)
        setBlockList(() => [...blockList, newBlock])
    }

    return (
        <CreateBlockStyle>
                <select
                    onChange={selectBlockType}>
                    <option value={"verse"}>verse</option>
                    <option value={"bridge"}>bridge</option>
                    <option value={"hook"}>hook</option>
                    <option value={"chrous"}>chrous</option>
                    <option value={"pre-chorus"}>pre-chorus</option>
                    <option value={"etc"}>etc</option>
                </select>
                <button onClick={onCreate} style={{fontSize: 14}}>여기를 눌러서 블록을 추가한 후 작사 해보세요</button>
        </CreateBlockStyle>
    )
}

export default BlockCreate