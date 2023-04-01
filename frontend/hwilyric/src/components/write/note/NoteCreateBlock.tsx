import { useState } from "react"
import { useRecoilState } from "recoil"
import { blockListState, blockIdState } from "../../../atoms/noteAtoms"
import { CreateBlockStyle } from "../../../styles/writeNoteStyle"
import { ILyricBlockTypes } from "../../../types/writingType"

function BlockCreate() {
    const [ blockList, setBlockList ] = useRecoilState<ILyricBlockTypes[]>(blockListState)
    const [ blockId, setBlockId ] = useRecoilState<number>(blockIdState)

    const [ blockType, setBlockType ] = useState<string>("Verse")

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
                    <option value={"etc"}>etc</option>
                </select>
                <button onClick={onCreate}> + </button>
        </CreateBlockStyle>
    )
}

export default BlockCreate