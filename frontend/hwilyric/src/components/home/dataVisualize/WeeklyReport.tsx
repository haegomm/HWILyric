import WeeklyReportKeyword from "./WeeklyReportKeyword";
import WeeklyReportGenre from "./WeeklyReportGenre";
import {
  WeeklyReportDiv,
  WeeklyReportTitle,
  WeeklyReportSubtitle,
} from "../../../styles/DataVisaulizeStyle";
import { weeklyNewSong } from "../../../api/visualizingApi";
import { useState, useEffect } from "react";

import axios from "axios";
import { INewSongTypes } from "../../../types/visualizingType";

const weeklyNewSong2 = async (date: INewSongTypes) => {
  const res = await axios.get(
    `https://j8b107.p.ssafy.io/api/trend/weekly?startDate=${date.startDate}&endDate=${date.endDate}`
  );
  return res.data;
};

const today = new Date();
const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

const yyyyMMdd = (date: Date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
};

const todayString = yyyyMMdd(today); // 오늘 날짜의 문자열 표현
const weekAgoString = yyyyMMdd(weekAgo); // 일주일 전 날짜의 문자열 표현

function WeeklyReport() {
  const [data, setData] = useState({ genres: null, keywords: null });
  console.log(todayString, weekAgoString);
  const getData = async () => {
    const data = await weeklyNewSong2({
      startDate: weekAgoString,
      endDate: todayString,
    });
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data.genres) {
    return <div>Loading...</div>;
  }

  return (
    <WeeklyReportDiv>
      <WeeklyReportTitle>주간 리포트</WeeklyReportTitle>
      <WeeklyReportSubtitle>최근 인기 키워드</WeeklyReportSubtitle>
      <WeeklyReportKeyword data={data.keywords} />
      <WeeklyReportSubtitle>주간 신곡 인기 장르</WeeklyReportSubtitle>
      <WeeklyReportGenre data={data.genres} />
    </WeeklyReportDiv>
  );
}

export default WeeklyReport;
