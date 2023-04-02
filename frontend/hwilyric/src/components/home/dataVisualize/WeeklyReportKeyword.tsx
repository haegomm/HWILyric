import React from "react";
import {
  WeeklyGenreBlockP,
  WeeklyGenreLineDiv,
  WeeklyReportGenreDiv,
} from "../../../styles/DataVisaulizeStyle";
import { IWeeklyReportGenre } from "../../../types/visualizingType";

function WeeklyReportKeyword(props: any) {
  // const data = props.data
  const data: IWeeklyReportGenre[] = [
    { name: "장르1", count: 1 },
    { name: "장르2", count: 2 },
    { name: "장르3", count: 3 },
    { name: "장르4", count: 4 },
    { name: "장르5", count: 5 },
    { name: "장르6", count: 6 },
  ];

  // 장르 데이터를 그룹화하여 3개씩 나누기
  const groupedData = [];
  for (let i = 0; i < 6; i += 3) {
    const mydata = props.data[0] ? props.data : data;
    groupedData.push(mydata.slice(i, i + 3));
  }

  return (
    <WeeklyReportGenreDiv>
      {groupedData.map((group) => {
        return (
          <WeeklyGenreLineDiv>
            {group.map((genreData: any) => {
              return <WeeklyGenreBlockP>{genreData.name}</WeeklyGenreBlockP>;
            })}
          </WeeklyGenreLineDiv>
        );
      })}
    </WeeklyReportGenreDiv>
  );
}

export default WeeklyReportKeyword;
