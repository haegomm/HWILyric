import React from "react";
import { WeeklyReportGenreDiv } from "../../../styles/DataVisaulizeStyle";
import { IWeeklyReportGenre } from "../../../types/visualizingType";

function WeeklyReportGenre(props: any) {
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
    groupedData.push(data.slice(i, i + 3));
  }

  return (
    <WeeklyReportGenreDiv>
      {groupedData.map((group) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {group.map((genreData) => {
              return (
                <div
                  style={{
                    background: "red",
                    width: "50px",
                    height: "30px",
                  }}
                >
                  {genreData.name}
                </div>
              );
            })}
          </div>
        );
      })}
    </WeeklyReportGenreDiv>
  );
}

export default WeeklyReportGenre;
