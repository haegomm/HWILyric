import React from "react";
import WeeklyReportKeyword from "./WeeklyReportKeyword";
import WeeklyReportGenre from "./WeeklyReportGenre";
import {
  WeeklyReportDiv,
  WeeklyReportTitle,
  WeeklyReportSubtitle,
} from "../../../styles/DataVisaulizeStyle";
import { weeklyNewSong } from "../../../api/visualizingApi";
import axios from "axios";
import { useState, useEffect } from "react";
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

  const getData = async () => {
    const data = await weeklyNewSong({
      startDate: todayString,
      endDate: weekAgoString,
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
