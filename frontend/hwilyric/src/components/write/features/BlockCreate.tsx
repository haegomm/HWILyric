import { useState } from "react"
import { useRecoilState } from "recoil"
import { BlockData, blockListState, blockIdState } from "../../../atoms/BlockAtoms"

function BlockCreate() {
    const [ blockList, setBlockList ] = useRecoilState<BlockData[]>(blockListState)
    const [ blockId, setBlockId ] = useRecoilState<number>(blockIdState)

    const [ blockType, setBlockType ] = useState<string>("Verse 1")

    const selectBlockType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBlockType(event.target.value)
    }

    const onCreate = (): void => {
        const newBlock: BlockData = {
            id: blockId,
            type: blockType,
            lyrics: ""
        }
        setBlockId(() => blockId + 1)
        setBlockList(() => [...blockList, newBlock])
    }

    return (
        <div>
            <div className="addBlockBox">
                <select
                    onChange={selectBlockType}>
                    <option value={"Verse 1"}>verse 1</option>
                    <option value={"Verse 2"}>verse 2</option>
                    <option value={"Bridge"}>Bridge</option>
                    <option value={"Hook"}>Hook</option>
                    <option value={"Etc"}>Etc</option>
                </select>
                <button onClick={onCreate}> + </button>
            </div>
        </div>
    )
}

export default BlockCreate