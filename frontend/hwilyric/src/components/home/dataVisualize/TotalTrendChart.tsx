import React from "react";
import { ResponsiveStream } from "@nivo/stream";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    Raoul: 88,
    Josiane: 161,
    Marcel: 191,
    René: 77,
    Paul: 78,
    Jacques: 55,
  },
  {
    Raoul: 44,
    Josiane: 91,
    Marcel: 148,
    René: 50,
    Paul: 23,
    Jacques: 66,
  },
  {
    Raoul: 171,
    Josiane: 10,
    Marcel: 177,
    René: 27,
    Paul: 192,
    Jacques: 11,
  },
  {
    Raoul: 60,
    Josiane: 30,
    Marcel: 135,
    René: 93,
    Paul: 89,
    Jacques: 37,
  },
  {
    Raoul: 186,
    Josiane: 161,
    Marcel: 200,
    René: 151,
    Paul: 121,
    Jacques: 101,
  },
  {
    Raoul: 50,
    Josiane: 149,
    Marcel: 172,
    René: 59,
    Paul: 143,
    Jacques: 100,
  },
  {
    Raoul: 132,
    Josiane: 139,
    Marcel: 147,
    René: 146,
    Paul: 161,
    Jacques: 59,
  },
  {
    Raoul: 71,
    Josiane: 118,
    Marcel: 179,
    René: 193,
    Paul: 11,
    Jacques: 95,
  },
  {
    Raoul: 69,
    Josiane: 37,
    Marcel: 127,
    René: 60,
    Paul: 22,
    Jacques: 171,
  },
];

function TotalTrendChart() {
  return (
    <div style={{ width: "1344px", height: "800px" }}>
      <ResponsiveStream
        data={data}
        keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          // orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisLeft={null}
        enableGridX={true}
        enableGridY={false}
        curve="basis"
        offsetType="none"
        colors={{ scheme: "blues" }}
        fillOpacity={0.75}
        borderColor={{ theme: "background" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#2c998f",
            size: 4,
            padding: 2,
            stagger: true,
          },
          {
            id: "squares",
            type: "patternSquares",
            background: "inherit",
            color: "#e4c912",
            size: 6,
            padding: 2,
            stagger: true,
          },
        ]}
        fill={[
          {
            match: {
              id: "Paul",
            },
            id: "dots",
          },
          {
            match: {
              id: "Marcel",
            },
            id: "squares",
          },
        ]}
        dotSize={8}
        dotColor={{ from: "color" }}
        dotBorderWidth={2}
        dotBorderColor={{
          from: "color",
          modifiers: [["darker", 0.7]],
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default TotalTrendChart;
