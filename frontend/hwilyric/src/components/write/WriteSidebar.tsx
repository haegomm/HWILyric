import { useState } from "react"
import { Desc, TabMenu } from "../../styles/writeSidebarStyle"
import { SideBarBox } from "../../styles/writeSidebarStyle"
import { WriteDivBox } from "../../styles/common/DivBox"
import CheckSimilarity from "./sidebar/CheckSimilarity"
import Memo from "./sidebar/Memo"

function WriteSidebar() {

    const [currentTab, setCurrentTab] = useState(0)

    const tabArr = [
        { name: '레퍼런스', content: <Memo /> },
        { name: '키워드 추천', content: '키워드 추천 탭~!' },
        { name: '내 가사', content: '내 가사 탭~!' },
        { name: '유사도 측정', content: <CheckSimilarity /> },
    ]

    const selectTabHandler = (index: number) => {
        setCurrentTab(index)
    }

    return (
        <WriteDivBox>
            <SideBarBox>
                <TabMenu>
                    {tabArr.map((el, index) => (
                        <li className={index === currentTab ? "submenu focused" : "submenu"}
                            key={index}
                            onClick={() => selectTabHandler(index)}>{el.name}</li>
                    ))}
                </TabMenu>
                <Desc>
                    <div>
                        {tabArr[currentTab].content}
                    </div>
                </Desc>
            </SideBarBox>
        </WriteDivBox>
    )
}

export default WriteSidebar