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
  if (data.length !== 0) {
    for (let i = 0; i < 6; i += 3) {
      groupedData.push(data.slice(i, i + 3));
    }
  }
  let colorNum = -1;
  return (
    <WeeklyReportKeywordsDiv>
      {groupedData.map((group) => {
        return (
          <WeeklyKeywordLineDiv>
            {group.map((keywordData: any) => {
              colorNum++;
              return (
                <WeeklyKeywordBlockP
                  color={keywordBlockColors[colorNum % 4]}
                  theme={theme}
                  key={colorNum}
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
