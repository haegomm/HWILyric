import React from "react";
import WeeklyReportGenre from "./WeeklyReportGenre";
import WeeklyReportKeywords from "./WeeklyReportKeywords";
import {
  WeeklyReportDiv,
  WeeklyReportTitle,
  WeeklyReportSubtitle,
} from "../../../styles/DataVisaulizeStyle";
import AnnualGenreChart from "./AnnualGenreChart";
import { WordCloud } from "./AnnualKeywordCloud";

function WeeklyReport() {
  return (
    <WeeklyReportDiv>
      <div></div>
      <WeeklyReportTitle>주간 리포트</WeeklyReportTitle>
      <div></div>
      <WeeklyReportSubtitle>최근 인기 키워드</WeeklyReportSubtitle>
      <div></div>
      <WeeklyReportGenre />
      <div></div>
      <WeeklyReportSubtitle>주간 신곡 인기 장르</WeeklyReportSubtitle>
      <div></div>
      <WeeklyReportKeywords />
    </WeeklyReportDiv>
  );
}

export default WeeklyReport;
