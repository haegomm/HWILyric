import { useState } from "react"
import { useRecoilState } from "recoil"
import { blockListState, BlockData } from "../../../atoms/BlockAtoms"

function BlockItem({ id, type, lyrics }: BlockData) {

    const [blockList, setBlockList] = useRecoilState(blockListState)
    const index = blockList.findIndex((block)=> block.id === id)

    const [ blockType, setBlockType ] = useState<string>()

    const replaceIndex = (blockList: BlockData[], index: number, editedBlock: BlockData ) => {
        return [...blockList.slice(0, index), editedBlock, ...blockList.slice(index+1)]
    }

    const editLyrics = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const editedBlock = {
            id,
            type,
            lytics: event.target.value,
        }
        const newList = replaceIndex(blockList, index, editedBlock)
        setBlockList(newList)
    }

    return (
        <div>
            <select
                defaultValue={type}>
                <option value={"Verse 1"}>verse 1</option>
                <option value={"Verse 2"}>verse 2</option>
                <option value={"Bridge"}>Bridge</option>
                <option value={"Hook"}>Hook</option>
                <option value={"Etc"}>Etc</option>
                </select>
            <textarea
                className="writeLyric"
                value={lyrics}
                onChange={editLyrics}
            />
        </div>
    )
}

export default BlockItem
