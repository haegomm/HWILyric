import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { useCallback } from "react"
import { useRecoilState } from "recoil"
import { blockListState } from "../../../atoms/noteAtoms"
import BlockItem from "./NoteBlockItem"
import { BlockListStyle } from "../../../styles/writeNoteStyle"

function BlockList() {

    const [blockList, setBlockList] = useRecoilState(blockListState)
    

    const onDragEnd = useCallback((result: DropResult) => {
        const { destination, source } = result

        if (!destination) return

        if (destination.droppableId === source.droppableId &&
            source.index === destination.index) return
        
        const copyBlockList = [...blockList]
        const [reorderedBlocks] = copyBlockList.splice(source.index, 1)
        copyBlockList.splice(destination.index, 0, reorderedBlocks)

        setBlockList(() => copyBlockList)
    }, [blockList, setBlockList])


    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="blockList">
                    {provided => (
                        <BlockListStyle className="blockList" ref={provided.innerRef}>
                            <>
                                {blockList.map((block, index) => (                             
                                    <BlockItem key={block.blockId} block = {block} index={index} />
                                ))}
                                {provided.placeholder}
                            </>
                        </BlockListStyle>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default BlockList