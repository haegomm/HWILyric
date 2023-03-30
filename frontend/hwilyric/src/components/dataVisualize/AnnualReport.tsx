import React from "react";
import { AnnualReportDiv } from "../../styles/DataVisaulizeStyle";
import AnnualGenre from "./AnnualGenreChart";
import AnnualKeyword from "./AnnualKeyword";

interface DataObject {
  id: string;
  label: string;
  value: number;
  color: string;
}

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

function AnnualReport() {
  return (
    <AnnualReportDiv>
      <AnnualGenre data={data}></AnnualGenre>
      <AnnualKeyword></AnnualKeyword>
    </AnnualReportDiv>
  );
}

export default AnnualReport;
