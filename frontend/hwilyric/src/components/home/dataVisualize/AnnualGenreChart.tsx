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
import { useTheme } from "styled-components";
import { lightTheme } from "../../../theme/theme";

function AnnualGenreChart(props: any) {
  const annualnow = useRecoilValue(annualNowAtom);
  const setAnnualnowSong = useSetRecoilState(annualNowSongAtom);
  function myFunc(node: any, event: Object) {
    if (node) {
      setAnnualnowSong(node.id);
    }
  }
  const theme = useTheme();

  return (
    <div style={{ width: "232px", height: "240px" }}>
      <AnnualReportTitle>{annualnow}년대 인기 장르</AnnualReportTitle>
      <ResponsivePie
        data={props.data}
        margin={{ top: 10 }}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={0}
        colors={{
          scheme: theme === lightTheme ? "blue_purple" : "purples",
        }}
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
        tooltip={({ datum }) => (
          <div
            style={{
              background: "white",
              color: "black",
              fontSize: "inherit",
              borderRadius: "2px",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px; padding: 5px 9px",
            }}
          >
            <div
              style={{
                whiteSpace: "pre",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "12px",
                  height: "12px",
                  background: "rgb(239, 237, 245)",
                  marginRight: "7px",
                }}
              ></span>
              <span>
                {datum.label} :{" "}
                <strong>{Math.round(datum.value * 100)}%</strong>
              </span>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default AnnualGenreChart;
