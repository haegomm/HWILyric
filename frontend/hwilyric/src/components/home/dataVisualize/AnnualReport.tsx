import React from "react";
import { AnnualReportDiv } from "../../../styles/DataVisaulizeStyle";
import AnnualGenre from "./AnnualGenre";
import AnnualKeyword from "./AnnualKeyword";
import { IAnnualGenreChartData } from "../../../types/visualizingType";

const data: IAnnualGenreChartData[] = [
  {
    id: "haskell",
    label: "haskell",
    value: 135,
  },
  {
    id: "lisp",
    label: "lisp",
    value: 175,
  },
  {
    id: "stylus",
    label: "stylus",
    value: 376,
  },
  {
    id: "javascript",
    label: "javascript",
    value: 127,
  },
  {
    id: "scala",
    label: "scala",
    value: 135,
  },
];

function AnnualReport() {
  return (
    <AnnualReportDiv>
      <AnnualGenre data={data}></AnnualGenre>
      <AnnualKeyword></AnnualKeyword>
    </AnnualReportDiv>
  );
}

export default AnnualReport;
