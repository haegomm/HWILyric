import React from "react";
import AnnualGenreChart2 from "./AnnualGenreChart2";
import AnnualGenreChart from "./AnnualGenreChart";
import { AnnualGenreDiv } from "../../../styles/DataVisaulizeStyle";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { annualGenreRatioSongAtom } from "../../../atoms/visualizingGenreAtom";
import {
  annualNowAtom,
  annualNowSongAtom,
} from "../../../atoms/visualizingAtoms";
import AnnualGenreSongs from "./AnnualGenreSongs";

function AnnualGenre(props: any) {
  const annualnow = useRecoilValue(annualNowAtom);
  const setAnnualNowSong = useSetRecoilState(annualNowSongAtom);
  const data = useRecoilValue(annualGenreRatioSongAtom);
  const chartData = [];
  let songData = {};
  for (const i of data[annualnow]) {
    chartData.push({ id: i.name, label: i.name, value: i.ratio });
    songData = { ...songData, [i.name]: i.songs };
  }
  setAnnualNowSong(chartData[0].id);
  return (
    <AnnualGenreDiv>
      <AnnualGenreChart data={chartData}></AnnualGenreChart>
      <AnnualGenreSongs data={songData}></AnnualGenreSongs>
    </AnnualGenreDiv>
  );
}

export default AnnualGenre;
