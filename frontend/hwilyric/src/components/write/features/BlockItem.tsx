import { useCallback, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { blockListState, BlockData } from "../../../atoms/BlockAtoms"

function BlockItem({ id, type, lyrics }: BlockData) {

    const [blockList, setBlockList] = useRecoilState(blockListState)
    const index = blockList.findIndex((block) => block.id === id)

    const [blockType, setBlockType] = useState<string>()

    const ref = useRef<HTMLTextAreaElement>(null)

    const replaceIndex = (blockList: BlockData[], index: number, editedBlock: BlockData) => {
        return [...blockList.slice(0, index), editedBlock, ...blockList.slice(index + 1)]
    }

    const selectBlockType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBlockType(event.target.value)
    }

    const onEditLyrics = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const editedBlock = {
            id,
            type: blockType,
            lytics: event.target.value,
        }
        const newList = replaceIndex(blockList, index, editedBlock)
        setBlockList(newList)
    }

    const onDeleteBlock = () => {
        const newBlockList = blockList.filter((block) => block.id !== id)
        setBlockList(newBlockList)
    }

    const handleResizeHeight = useCallback(() => {
        if (ref === null || ref.current === null) {
            return
        }
        ref.current.style.height = '88px'
        ref.current.style.height = ref.current.scrollHeight + 'px'
    }, [])

    return (
        <div>
            <select
                defaultValue={type}
                onChange={selectBlockType}>
                <option value={"Verse 1"}>verse 1</option>
                <option value={"Verse 2"}>verse 2</option>
                <option value={"Bridge"}>Bridge</option>
                <option value={"Hook"}>Hook</option>
                <option value={"Etc"}>Etc</option>
            </select>
            <textarea
                className="writeLyric"
                value={lyrics}
                ref={ref}
                onChange={onEditLyrics}
                onInput={handleResizeHeight}
            />
            <button onClick={onDeleteBlock}>-</button>
        </div>
    )
}

export default BlockItem
