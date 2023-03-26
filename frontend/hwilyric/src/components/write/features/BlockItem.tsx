import { useCallback, useRef, useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { useRecoilState } from "recoil"
import { blockListState, BlockData } from "../../../atoms/BlockAtoms"

interface BlockItemProps {
    block: BlockData
    index: number
}

function BlockItem({ block, index}: BlockItemProps) {

    const [blockList, setBlockList] = useRecoilState(blockListState)

    const [blockType, setBlockType] = useState<string>()
    const [lyrics, setLyrics] = useState<string>("")

    const ref = useRef<HTMLTextAreaElement>(null)

    const onChangeBlockType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBlockType(event.target.value)
    }

    const onChangeLyrics = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLyrics(event.target.value)
        console.log(lyrics)
    }

    // 자동저장 or 저장 버튼 눌렸을 때
    const onEditBlocks = () => {
        let newLyrics: string = lyrics
        newLyrics = newLyrics.replaceAll("<br>", "\r\n")

        const newBlockList = blockList.map((it) => it.id === block.id ? {
            ...it,
            type: blockType,
            lyrics: newLyrics
        } : it)
        setBlockList(newBlockList)
    }

    const onDeleteBlock = () => {
        const newBlockList = blockList.filter((item) => item.id !== block.id)
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
        <Draggable draggableId={block.id.toString()} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                    <select
                        defaultValue={block.type}
                        onChange={onChangeBlockType}>
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
                        onChange={onChangeLyrics}
                        onInput={handleResizeHeight}
                    />
                    <button onClick={onDeleteBlock}>-</button>
                </div>
            )}
        </Draggable>
    )
}

export default BlockItem
