import React from "react";
import AnnualGenreChart from "./AnnualGenreChart";
import { AnnualGenreDiv } from "../../styles/DataVisaulizeStyle";

function AnnualGenre(props: any) {
  return (
    <AnnualGenreDiv>
      <AnnualGenreChart data={props.data}></AnnualGenreChart>
    </AnnualGenreDiv>
  );
}

export default AnnualGenre;
