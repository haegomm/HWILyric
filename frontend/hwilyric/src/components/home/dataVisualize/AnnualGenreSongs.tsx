import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSpring, animated } from "react-spring";
import { ResponsivePie } from "@nivo/pie";
import { getAllJSDocTagsOfKind } from "typescript";
import { useRecoilValue } from "recoil";
import { annualNowSongAtom } from "../../../atoms/visualizingAtoms";
import { annualGenreRatioSongAtom } from "../../../atoms/visualizingGenreAtom";
import { AnnualGenreSongDiv } from "../../../styles/DataVisaulizeStyle";

function AnnualGenreSongs(props: any) {
  const annualnowsong = useRecoilValue(annualNowSongAtom);
  return (
    <AnnualGenreSongDiv>
      {props.data[annualnowsong].map((song: any) => (
        <div>{song}</div>
      ))}
    </AnnualGenreSongDiv>
  );
}

export default AnnualGenreSongs;
