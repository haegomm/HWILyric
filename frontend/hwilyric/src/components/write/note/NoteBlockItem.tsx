import { useCallback, useRef } from "react"
import { Draggable } from "react-beautiful-dnd"
import { useRecoilState } from "recoil"
import { blockListState } from "../../../atoms/NoteAtoms"
import { IBlockData  } from "../../../types/noteType"

interface BlockItemProps {
    block: IBlockData
    index: number
}

function BlockItem({ block, index}: BlockItemProps) {

    const [blockList, setBlockList] = useRecoilState(blockListState)

    const ref = useRef<HTMLTextAreaElement>(null)

    const onEditBlockType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let newType: string = event.target.value

        const newBlockList = blockList.map((it) => it.blockId === block.blockId ? {
            ...it,
            type: newType
        } : it)
        
        setBlockList(() => newBlockList)
    }

    const onEditLyrics = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newLyrics: string = event.target.value
        newLyrics = newLyrics.replaceAll("<br>", "\r\n")

        const newBlockList = blockList.map((it) => it.blockId === block.blockId ? {
            ...it,
            lyrics: newLyrics
        } : it)
        
        setBlockList(newBlockList)
    }

    const onDeleteBlock = () => {
        const newBlockList = blockList.filter((item) => item.blockId !== block.blockId)
        setBlockList(newBlockList)
    }

    const handleResizeHeight = useCallback(() => {
        if (ref === null || ref.current === null) {
            return
        }
        ref.current.style.height = '80px'
        ref.current.style.height = ref.current.scrollHeight + 'px'
    }, [])

    return (
        <Draggable draggableId={block.blockId.toString()} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                    <select
                        defaultValue={block.type}
                        onChange={onEditBlockType}>
                        <option value={"Verse"}>Verse</option>
                        <option value={"Bridge"}>Bridge</option>
                        <option value={"Hook"}>Hook</option>
                        <option value={"Etc"}>Etc</option>
                    </select>
                    <textarea
                        className="writeLyric"
                        value={block.lyrics}
                        ref={ref}
                        onChange={onEditLyrics}
                        onInput={handleResizeHeight}
                    />
                    <button onClick={onDeleteBlock}>-</button>
                </div>
            )}
        </Draggable>
    )
}

export default BlockItem
