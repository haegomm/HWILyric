import { AreaChart, XAxis, YAxis, Area, Tooltip, Legend } from "recharts";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { annualNowAtom, totalTrendAtom } from "../../../atoms/visualizingAtoms";
import { lightTheme } from "../../../theme/theme";
import { useTheme } from "styled-components";
import AnnualGenreChart from "./AnnualGenreChart";
import styled from "styled-components";

const genres = [
  "일렉트로니카",
  "키즈",
  "국악가요",
  "장르정보없음",
  "POP",
  "포크/블루스",
  "국내영화",
  "록/메탈",
  "성인가요/트로트",
  "애시드/퓨전/팝",
  "창작동요",
  "랩/힙합",
  "인디음악",
  "R&B/Soul",
  "댄스",
  "보컬재즈",
  "발라드",
  "뉴에이지",
  "국악",
  "국내드라마",
  "재즈",
];

const colorArr = [
  ["#81E47F", "#96BCF2"],
  ["#88C4E9", "#D1C4F1"],
  ["#CD2D87", "#71C6C9"],
  ["#841B95", "#E399E4"],
  ["#E4B2FA", "#FDC3B7"],
  ["#FACFD6", "#B1ADF6"],
  ["#ACE5F8", "#E6B2FD"],
  ["#FDBFB4", "#FBD1DD"],
  ["#FDC3B7", "#FACFD6"],
  ["#E6B2FD", "#FDBFB4"],
];

const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fontSize={10} // 글자 크기 조절
        fill="#666" // 글자 색상
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

function getRandomColor(): string {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue}, 1)`;
}

const sortTooltip = (a: any, b: any) => {
  return b.value - a.value; // value 기준으로 내림차순 정렬
};

const selectedGenres = [
  "발라드",
  "댄스",
  "성인가요/트로트",
  "포크/블루스",
  "록/메탈",
  "랩/힙합",
  "annual",
];

const selectedGenres2 = [
  "발라드",
  "댄스",
  "성인가요/트로트",
  "포크/블루스",
  "록/메탈",
  "랩/힙합",
];

function TotalTrendChart(props: any) {
  const totalTrendData = useRecoilValue(totalTrendAtom);
  const setAnnualnow = useSetRecoilState(annualNowAtom);
  const theme = useTheme();
  let colorNum = 0;
  let chartData = [];
  for (const i of totalTrendData.genres) {
    const annualObj = Object.fromEntries(
      Object.entries(i).filter(([key, value]) => selectedGenres.includes(key))
    );
    chartData.push(annualObj);
  }

  console.log(chartData);

  return (
    <AreaChart
      width={1000}
      height={600}
      data={chartData}
      margin={{ top: 5, right: 10, left: 20, bottom: 60 }}
      onClick={(event) => {
        if (event) {
          const annual: any = event.activeLabel;
          if (!isNaN(parseInt(annual))) {
            setAnnualnow(annual);
          }
        }
      }}
    >
      <defs>
        {selectedGenres2.map((genre) => {
          const color1 = colorArr[colorNum % 10][0];
          const color2 = colorArr[colorNum % 10][1];
          colorNum++;
          return (
            <>
              <linearGradient
                key={`Grad1-${genre}`}
                id={genre}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={color1} stopOpacity={0.1} />
                <stop offset="95%" stopColor={color2} stopOpacity={0.4} />
              </linearGradient>
              <linearGradient
                key={`Grad2-${genre}`}
                id={"dark" + genre}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={color1} stopOpacity={0.5} />
                <stop offset="95%" stopColor={color2} stopOpacity={0.7} />
              </linearGradient>
            </>
          );
        })}
      </defs>
      <XAxis dataKey="annual" tick={<CustomXAxisTick />} interval={9} />
      <YAxis type="number" hide={true} domain={[0, "dataMax"]} tick={false} />
      <Tooltip
        content={({ active, payload, label }) => {
          if (active && payload) {
            const sortedPayload = [...payload].sort(
              (a: any, b: any) => b.value - a.value
            );

            return (
              <div
                className="custom-tooltip"
                style={{
                  background: theme === lightTheme ? "white" : "#636161",
                  color: theme === lightTheme ? "black" : "black",
                  borderRadius: "5px",
                  padding: "10px",
                  opacity: theme === lightTheme ? "1" : "0.7",
                }}
              >
                <p>{label}년 인기 장르</p>
                <ul>
                  {sortedPayload.map((entry: any, index) => (
                    <li key={`item-${index}`}>{`${entry.name}: ${Math.round(
                      entry.value * 100
                    )}%`}</li>
                  ))}
                </ul>
              </div>
            );
          }
        }}
      />
      <Legend layout="vertical" align="left" verticalAlign="middle" />
      {selectedGenres2.map((genre) => {
        return (
          <Area
            key={`Area-${genre}`}
            type="monotone"
            dataKey={genre}
            stroke={getRandomColor()}
            fillOpacity={0.1}
            fill={
              theme === lightTheme ? `url(#${genre})` : `url(#dark${genre})`
            }
          />
        );
      })}
    </AreaChart>
  );
}

export default TotalTrendChart;
