import { useState } from "react"
import { Desc, TabMenu } from "../../styles/writeSidebarStyle"
import { SideBarBox } from "../../styles/writeSidebarStyle"
import { WriteDivBox } from "../../styles/common/DivBox"
import SidebaarReferenceTab from "./SidebarReferenceTab"
import SidebarCheckSimilarityTab from "./SidebarCheckSimilarityTab"
import SidebarMyLyrics from "./sidebar/SidebarMyLyrics"
import SidebarRecommend from "./sidebar/SidebarRecommend"


function WriteSidebar() {

    const [currentTab, setCurrentTab] = useState(0)

    const tabArr = [
        { name: '레퍼런스', content: <SidebaarReferenceTab /> },
        { name: '키워드 추천', content: <SidebarRecommend /> },
        { name: '내 가사', content: <SidebarMyLyrics /> },
        { name: '유사도 측정', content: <SidebarCheckSimilarityTab /> },
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
