import { useTheme } from "styled-components";
import {
  WeeklyKeywordBlockP,
  WeeklyKeywordLineDiv,
  WeeklyReportKeywordsDiv,
} from "../../../styles/DataVisaulizeStyle";

import { isModifyingAtom } from "../../../atoms/mypageAtom";
import {
  blockListState,
  noteIdState,
  noteThumbnailFileState,
  noteThumbnailUrlState,
  titleState,
} from "../../../atoms/noteAtoms";
import { memoState } from "../../../atoms/sidebarAtoms";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function WeeklyReportKeyword(props: any) {
  const navigate = useNavigate();
  const isModifying = useSetRecoilState(isModifyingAtom);
  const setTitle = useSetRecoilState(titleState);
  const resetNoteId = useResetRecoilState(noteIdState);
  const resetBlockList = useResetRecoilState(blockListState);
  const resetMemo = useResetRecoilState(memoState);
  const resetThumbnail = useResetRecoilState(noteThumbnailUrlState);
  const resetThumbnailFile = useResetRecoilState(noteThumbnailFileState);

  const keywordBlockColors = ["#B0E3F9", "#DEB3FB", "#FEC3B5", "#FBD5E0"];
  const theme = useTheme();

  const onWeeklyKeywordHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const eventTarget = e.target as HTMLElement;
    const word = eventTarget.innerText;
    isModifying(true);
    setTitle(word);
    resetNoteId();
    resetBlockList();
    resetMemo();
    resetThumbnail();
    resetThumbnailFile();
    navigate("/write");
  };

  const groupedData = [];
  const data = props.data;
  const dataLeng = data.length;
  const idxs = new Set<number>();

  if (data.length !== 0) {
    while (idxs.size < 6) {
      const num = Math.floor(Math.random() * dataLeng);
      idxs.add(num);
    }
    let numArr: any[] = [];
    idxs.forEach((index) => {
      numArr.push(data[index]);
      if (numArr.length === 3) {
        groupedData.push(numArr);
        numArr = [];
      }
    });
    groupedData.push(numArr);
  }
  let colorNum = -1;
  return (
    <WeeklyReportKeywordsDiv>
      {groupedData.map((group) => {
        return (
          <WeeklyKeywordLineDiv key={`weeklyKeywordLines-${colorNum}`}>
            {group.map((keywordData: any) => {
              colorNum++;
              return (
                <WeeklyKeywordBlockP
                  color={keywordBlockColors[colorNum % 4]}
                  theme={theme}
                  key={`weeklyKeywordBlock-${colorNum}`}
                  onClick={onWeeklyKeywordHandler}
                >
                  {keywordData}
                </WeeklyKeywordBlockP>
              );
            })}
          </WeeklyKeywordLineDiv>
        );
      })}
    </WeeklyReportKeywordsDiv>
  );
}

export default WeeklyReportKeyword;
