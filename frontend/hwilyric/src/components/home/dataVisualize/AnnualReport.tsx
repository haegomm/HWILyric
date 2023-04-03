import React from "react";
import { AnnualReportDiv } from "../../../styles/DataVisaulizeStyle";
import AnnualGenre from "./AnnualGenre";
import AnnualKeyword from "./AnnualKeyword";
import { IAnnualGenreChartData } from "../../../types/visualizingType";
import { useRecoilValue } from "recoil";
import { annualNowAtom } from "../../../atoms/visualizingAtoms";

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
  const annualnow = useRecoilValue(annualNowAtom);
  return (
    <AnnualReportDiv>
      <AnnualGenre data={data} annualnow={annualnow}></AnnualGenre>
      <AnnualKeyword annualnow={annualnow}></AnnualKeyword>
    </AnnualReportDiv>
  );
}

export default AnnualReport;
