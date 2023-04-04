import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { useCallback, useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { blockListState, titleState, noteIdState, noteThumbnailFileState, noteThumbnailUrlState } from "../../../atoms/noteAtoms"
import { IsLoginAtom }  from "../../../atoms/userAtom"
import { ILyricInfoTypes } from "../../../types/writingType"
import { saveNote } from "../../../api/writingApi"
import BlockItem from "./NoteBlockItem"
import { BlockListStyle } from "../../../styles/writeNoteStyle"
import { SaveButton } from "../../../styles/common/ButtonStyle"
import { memoState } from "../../../atoms/sidebarAtoms"
import { useNavigate } from "react-router-dom"

function BlockList() {
    const navigate = useNavigate();

    const [blockList, setBlockList] = useRecoilState(blockListState)
    const [noteId, setNoteId] = useRecoilState(noteIdState)
    const title = useRecoilValue(titleState)

    const isLogin = useRecoilValue(IsLoginAtom)
    const memo = useRecoilValue(memoState)
    const thumbnailFile = useRecoilValue(noteThumbnailFileState)
    const noteThumbnailUrl = useRecoilValue(noteThumbnailUrlState)
    const setThumbnailImageUrl = useSetRecoilState(noteThumbnailUrlState)

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

    const onSaveBlockList = async () => {
        
        const noteInfo: ILyricInfoTypes = {
            id: noteId,
            title: title,
            thumbnail: noteThumbnailUrl,
            memo: memo,
            lyricList: blockList
        }
        
        const formData = new FormData()
        const noteInfoString = JSON.stringify(noteInfo)
        formData.append("noteInfo", new Blob([noteInfoString], { type: 'application/json' }));
        // if (thumbnailFile) {
        //     const blob = new Blob([thumbnailFile],  { type: thumbnailFile.type })
        //     formData.append("thumbnail", blob)
        // }
        formData.append("thumbnail", thumbnailFile)

        // 로그인 유무 확인
        if (isLogin) {
            const res = await saveNote(formData)
            console.log(res)
            setNoteId(() => res)
            setThumbnailImageUrl(res.thumbnail)

            // 저장 시간 받기
        } else {
            window.localStorage.setItem('note', JSON.stringify(formData))
            console.log("로컬에 저장~!")
            // 로그인X -> localStorage 저장 후 로그인 물어보기
            if (window.confirm("로그인이 필요합니다. 로그인 하시겠습니까?")) {
                navigate("/login")
            }
            // 로그인 하고 돌아오면 localStorage 데이터 불러오기
        }
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
            <SaveButton onClick={onSaveBlockList}>저장</SaveButton>
        </BlockListStyle>
    )
}

export default BlockList