import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { useCallback, useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { blockListState, titleState, noteIdState } from "../../../atoms/noteAtoms"
import  { IsLoginAtom }  from "../../../atoms/userAtom"
import { ILyricInfoTypes } from "../../../types/writingType"
import { saveNote } from "../../../api/writingApi"
import BlockItem from "./NoteBlockItem"
import { BlockListStyle } from "../../../styles/writeNoteStyle"

function BlockList() {

    const [blockList, setBlockList] = useRecoilState(blockListState)
    const [noteId, setNoteId] = useRecoilState(noteIdState)
    const title = useRecoilValue(titleState)

    const isLogin = useRecoilValue(IsLoginAtom)

    // useEffect(() => {
    //     const autoSaveNote = setInterval(() => {
    //         onSaveBlockList()
    //   }, 180000)
    
    //   return () => {
    //     clearInterval(autoSaveNote)
    //   }
    // }, [])
    

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

    const onSaveBlockList = async() => {
        const body: ILyricInfoTypes = {
            id: noteId,
            title: title,
            thumnail: "하잉ㅎ 나 썸네일ㅎ",
            memo: "",
            lyricList: blockList
        }
        // 로그인 유무 확인
        if (isLogin) {
            const data = await saveNote(body)
            setNoteId(() => data)
            console.log("DB에 저장~!", data)
            // 저장 시간 받기
        } else {
            window.localStorage.setItem('note', JSON.stringify(body))
            console.log("로컬에 저장~!")
        }
        // 로그인X -> localStorage 저장 후 로그인 물어보기

        // 로그인 하고 돌아오면 localStorage 데이터 불러오기
    } 

    return (
        <BlockListStyle>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="blockList">
                    {provided => (
                        <div className="blockList" ref={provided.innerRef}>
                            <>
                                {blockList.map((block, index) => (                             
                                    <BlockItem key={block.blockId} block = {block} index={index} />
                                ))}
                                {provided.placeholder}
                            </>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button onClick={onSaveBlockList}>저장</button>
        </BlockListStyle>
    )
}

export default BlockList