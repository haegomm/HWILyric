import React from "react";
import { WeeklyReportKeywordsDiv } from "../../../styles/DataVisaulizeStyle";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  {
    name: "Page A",
    count: 4000,
  },
  {
    name: "Page B",
    count: 3000,
  },
  {
    name: "Page C",
    count: 2000,
  },
  {
    name: "Page D",
    count: 2780,
  },
  {
    name: "Page E",
    count: 1890,
  },
  {
    name: "Page F",
    count: 2390,
  },
  {
    name: "Page G",
    count: 3490,
  },
];

function WeeklyReportGenre(props: any) {
  return (
    <WeeklyReportKeywordsDiv>
      <BarChart
        width={252}
        height={240}
        data={props.data.length !== 0 ? props.data : data}
      >
        <defs>
          <linearGradient id="colorBar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="40%" stopColor="#88C4E9" stopOpacity={0.7} />
            <stop offset="80%" stopColor="#D1C4F1" stopOpacity={0.7} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Tooltip />
        <Bar dataKey="count" fill="url(#colorBar)" />
      </BarChart>
    </WeeklyReportKeywordsDiv>
  );
}

export default WeeklyReportGenre;
