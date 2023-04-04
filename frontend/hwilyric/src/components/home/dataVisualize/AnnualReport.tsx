import React from "react";
import { AnnualReportDiv } from "../../../styles/DataVisaulizeStyle";
import AnnualGenre from "./AnnualGenre";
import AnnualKeyword from "./AnnualKeyword";
import { useRecoilValue } from "recoil";
import { annualNowAtom } from "../../../atoms/visualizingAtoms";

function AnnualReport() {
  return (
    <AnnualReportDiv>
      <AnnualGenre></AnnualGenre>
      <AnnualKeyword></AnnualKeyword>
    </AnnualReportDiv>
  );
}

export default AnnualReport;
