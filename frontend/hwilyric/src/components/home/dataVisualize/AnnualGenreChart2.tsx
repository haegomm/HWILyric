import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { ResponsivePie } from "@nivo/pie";
import { getAllJSDocTagsOfKind } from "typescript";
import { useRecoilState } from "recoil";
import { annualNowSongAtom } from "../../../atoms/visualizingAtoms";
import { annualGenreRatioSongAtom } from "../../../atoms/visualizingGenreAtom";
import { PieChart, Pie } from "recharts";

function AnnualGenreChart2(props: any) {
  const [annualnowSong, setAnnualnowSong] = useRecoilState(annualNowSongAtom);
  function myFunc(node: any, event: Object) {
    if (node) {
      setAnnualnowSong(node.id);
    }
  }
  return (
    <PieChart width={420} height={300}>
      <Pie
        data={props.data}
        dataKey="value"
        nameKey="name"
        cx="55%"
        cy="40%"
        outerRadius={100}
        fill="#8884d8"
      />
    </PieChart>
  );
}

export default AnnualGenreChart2;
