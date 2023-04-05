import { useTheme } from "styled-components";
import {
  WeeklyKeywordBlockP,
  WeeklyKeywordLineDiv,
  WeeklyReportKeywordsDiv,
} from "../../../styles/DataVisaulizeStyle";

function WeeklyReportKeyword(props: any) {
  const keywordBlockColors = ["#B0E3F9", "#DEB3FB", "#FEC3B5", "#FBD5E0"];
  const theme = useTheme();

  // 키워드 데이터를 그룹화하여 3개씩 나누기
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
          <WeeklyKeywordLineDiv key={`Line-${colorNum}`}>
            {group.map((keywordData: any) => {
              colorNum++;
              return (
                <WeeklyKeywordBlockP
                  color={keywordBlockColors[colorNum % 4]}
                  theme={theme}
                  key={`Block-${colorNum}`}
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
