import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSpring, animated } from "react-spring";
import { ResponsivePie } from "@nivo/pie";
import { getAllJSDocTagsOfKind } from "typescript";

function myFunc(node: Object, event: Object) {
  console.log(node, "!!!!!!!!!!!!!!!!!!!!", event);
}

function AnnualGenreChart(props: any) {
  console.log(props);
  return (
    <div style={{ width: "400px", height: "300px" }}>
      <ResponsivePie
        data={props.data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "blue_purple" }}
        borderWidth={1}
        sortByValue={true}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        // defs={[
        //   {
        //     id: "dots",
        //     type: "patternDots",
        //     background: "inherit",
        //     color: "rgba(255, 255, 255, 0.3)",
        //     size: 4,
        //     padding: 1,
        //     stagger: true,
        //   },
        //   {
        //     id: "lines",
        //     type: "patternLines",
        //     background: "inherit",
        //     color: "rgba(255, 255, 255, 0.3)",
        //     rotation: -45,
        //     lineWidth: 6,
        //     spacing: 10,
        //   },
        // ]}
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
