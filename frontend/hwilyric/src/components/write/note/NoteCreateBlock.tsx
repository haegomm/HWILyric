import { useState } from "react"
import { useRecoilState } from "recoil"
import { blockListState, blockIdState } from "../../../atoms/noteAtoms"
import { IBlockData } from "../../../types/noteType"

function BlockCreate() {
    const [ blockList, setBlockList ] = useRecoilState<IBlockData[]>(blockListState)
    const [ blockId, setBlockId ] = useRecoilState<number>(blockIdState)

    const [ blockType, setBlockType ] = useState<string>("Verse")

    const selectBlockType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBlockType(event.target.value)
    }

    const onCreate = (): void => {
        
        const newBlock: IBlockData = {
            blockId: blockId,
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
                    <option value={"Verse"}>Verse</option>
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