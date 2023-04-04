import React from "react";
import { useTheme } from "styled-components";
import {
  WeeklyKeywordBlockP,
  WeeklyKeywordLineDiv,
  WeeklyReportKeywordsDiv,
} from "../../../styles/DataVisaulizeStyle";
import { IWeeklyReportKeyword } from "../../../types/visualizingType";

function WeeklyReportKeyword(props: any) {
  // const data = props.data
  const data: IWeeklyReportKeyword[] = [
    { name: "키워드1", count: 1 },
    { name: "키워드2", count: 2 },
    { name: "키워드3", count: 3 },
    { name: "키워드4", count: 4 },
    { name: "키워드5", count: 5 },
    { name: "키워드6", count: 6 },
  ];

  const keywordBlockColors = ["#B0E3F9", "#DEB3FB", "#FEC3B5", "#FBD5E0"];
  const theme = useTheme();

  // 키워드 데이터를 그룹화하여 3개씩 나누기
  const groupedData = [];
  const mydata = props.data.length !== 0 ? props.data : data;
  for (let i = 0; i < 6; i += 3) {
    groupedData.push(mydata.slice(i, i + 3));
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
