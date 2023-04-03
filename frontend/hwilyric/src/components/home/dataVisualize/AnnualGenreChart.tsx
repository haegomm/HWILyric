import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSpring, animated } from "react-spring";
import { ResponsivePie } from "@nivo/pie";
import { getAllJSDocTagsOfKind } from "typescript";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  annualNowAtom,
  annualNowSongAtom,
} from "../../../atoms/visualizingAtoms";
import { annualGenreRatioSongAtom } from "../../../atoms/visualizingGenreAtom";
import { AnnualReportTitle } from "../../../styles/DataVisaulizeStyle";

function AnnualGenreChart(props: any) {
  const annualnow = useRecoilValue(annualNowAtom);
  const setAnnualnowSong = useSetRecoilState(annualNowSongAtom);
  function myFunc(node: any, event: Object) {
    if (node) {
      setAnnualnowSong(node.id);
    }
  }
  return (
    <div style={{ width: "232px", height: "240px" }}>
      <AnnualReportTitle>{annualnow}년대 인기 장르</AnnualReportTitle>
      <ResponsivePie
        data={props.data}
        margin={{ top: 10 }}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={0}
        colors={{ scheme: "blue_purple" }}
        borderWidth={1}
        sortByValue={true}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLabel="id"
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={20}
        arcLabelsRadiusOffset={0.6}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[]}
        onClick={myFunc}
      />
    </div>
  );
}

export default AnnualGenreChart;
