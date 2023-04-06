import WeeklyReportKeyword from "./WeeklyReportKeyword";
import WeeklyReportGenre from "./WeeklyReportGenre";
import {
  WeeklyReportDiv,
  WeeklyReportTitle,
  WeeklyReportSubtitle,
  WeeklyReportGenreInterval,
  WeeklyGenreIntervalText,
  WeeklyReportMoveBox,
  WeeklyReportMoveArrow,
} from "../../../styles/DataVisaulizeStyle";
import { weeklyNewSong } from "../../../api/visualizingApi";
import { useState, useEffect } from "react";

import axios from "axios";
import { INewSongTypes } from "../../../types/visualizingType";
import { getDefaultNormalizer } from "@testing-library/react";

const weeklyNewSong2 = async (date: INewSongTypes) => {
  const res = await axios.get(
    `https://j8b107.p.ssafy.io/api/trend/weekly?startDate=${date.startDate}&endDate=${date.endDate}`
  );
  return res.data;
};

const today = new Date();
let weekEnd = new Date(today.getTime() - today.getDay() * 24 * 60 * 60 * 1000);
let weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1000);

const yyyyMMdd = (date: Date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
};

const yyyyMMdd2 = (date: Date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}년${month}월${day}일`;
};

let weekEndString = yyyyMMdd(weekEnd); // 오늘 날짜의 문자열 표현
let weekStartString = yyyyMMdd(weekStart); // 일주일 전 날짜의 문자열 표현

function WeeklyReport(props: any) {
  const [data, setData] = useState({ genres: null, keywords: null });
  const getData = async () => {
    const data = await weeklyNewSong2({
      startDate: weekStartString,
      endDate: weekEndString,
    });
    setData(data);
  };

  const weekMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const num = 1;
    weekEnd = new Date(
      today.getTime() - (today.getDay() - num) * 24 * 60 * 60 * 1000
    );
    weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1000);
    weekEndString = yyyyMMdd(weekEnd);
    weekStartString = yyyyMMdd(weekStart);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  if (!data.genres) {
    return <div>Loading...</div>;
  }

  return (
    <WeeklyReportDiv>
      <WeeklyReportMoveBox>
        <WeeklyReportTitle>주간 리포트</WeeklyReportTitle>
      </WeeklyReportMoveBox>
      <WeeklyReportSubtitle>최근 인기 키워드</WeeklyReportSubtitle>
      <WeeklyReportKeyword data={data.keywords} />
      <WeeklyReportSubtitle>주간 신곡 인기 장르</WeeklyReportSubtitle>
      <WeeklyReportGenreInterval>
        {yyyyMMdd2(weekStart)} - {yyyyMMdd2(weekEnd)}
        <WeeklyGenreIntervalText>
          * 주간 신곡은 매주 일요일에 반영됩니다. *
        </WeeklyGenreIntervalText>
      </WeeklyReportGenreInterval>
      <WeeklyReportGenre data={data.genres} />
    </WeeklyReportDiv>
  );
}

export default WeeklyReport;
