import React from "react";
import WeeklyReportGenre from "./WeeklyReportGenre";
import WeeklyReportKeywords from "./WeeklyReportKeywords";
import {
  WeeklyReportDiv,
  WeeklyReportTitle,
  WeeklyReportSubtitle,
} from "../../styles/DataVisaulizeStyle";
import AnnualGenreChart from "./AnnualGenreChart";
import { WordCloud } from "./AnnualKeywordCloud";

interface DataObject {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface WordCloudProps {
  words: Word[];
  width: number;
  height: number;
}
export interface Word {
  text: string;
  size: number;
}
const data2: Word[] = [
  {
    text: "the",
    size: 128,
  },
  {
    text: "you",
    size: 109,
  },
  {
    text: "Dun",
    size: 96,
  },
  {
    text: "like",
    size: 69,
  },
  {
    text: "I’m",
    size: 60,
  },
  {
    text: "You",
    size: 54,
  },
  {
    text: "Dance",
    size: 48,
  },
];
const dataset: WordCloudProps = {
  words: data2,
  width: 100,
  height: 100,
};
const data: DataObject[] = [
  {
    id: "haskell",
    label: "haskell",
    value: 135,
    color: "hsl(293, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 175,
    color: "hsl(344, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 376,
    color: "hsl(276, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 127,
    color: "hsl(10, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 135,
    color: "hsl(57, 70%, 50%)",
  },
];

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
      <div style={{ width: "100px", height: "100px" }}>
        <AnnualGenreChart data={data}></AnnualGenreChart>
      </div>
      <WordCloud words={data2} height={1000} width={1000} />
    </WeeklyReportDiv>
  );
}

export default WeeklyReport;
