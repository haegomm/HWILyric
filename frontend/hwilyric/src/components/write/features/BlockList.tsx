import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { useCallback } from "react"
import { useRecoilState } from "recoil"
import { blockListState } from "../../../atoms/BlockAtoms"
import BlockItem from "./BlockItem"

function BlockList() {

    const [blockList, setBlockList] = useRecoilState(blockListState)

    const onDragEnd = useCallback((result: DropResult) => {
        const { destination, source } = result

        // 리스트 밖으로 drop되면 destination(drop이 끝난 위치)이 null
        if (!destination) return

        // drag시작과 drop의 끝이 같으면 변한 것이 없음
        if (destination.droppableId === source.droppableId &&
            source.index === destination.index) return
        
        const copyBlockList = [...blockList]
        const [reorderedBlocks] = copyBlockList.splice(source.index, 1)
        copyBlockList.splice(destination.index, 0, reorderedBlocks)

        setBlockList(() => copyBlockList)
        console.log(blockList)
    }, [blockList, setBlockList])

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="blockList">
                {provided => (
                    <div className="blockList" ref={provided.innerRef}>
                        <>
                            {blockList.map((block, index) => (                             
                                <BlockItem key={block.id} block = {block} index={index} />
                            ))}
                            {provided.placeholder}
                        </>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default BlockList