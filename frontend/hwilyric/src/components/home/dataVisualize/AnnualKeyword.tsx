import React from "react";
import { AnnualKeywordDiv } from "../../../styles/DataVisaulizeStyle";
import AnnualKeywordCloud from "./AnnualKeywordCloud";

function AnnualKeyword(props: any) {
  return (
    <AnnualKeywordDiv>
      <AnnualKeywordCloud></AnnualKeywordCloud>
    </AnnualKeywordDiv>
  );
}

export default AnnualKeyword;
