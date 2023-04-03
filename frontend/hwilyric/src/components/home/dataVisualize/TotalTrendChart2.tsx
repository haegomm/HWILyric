import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
} from "recharts";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { annualNowAtom, totalTrendAtom } from "../../../atoms/visualizingAtoms";

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

function TotalTrendChart2(props: any) {
  const totalTrendData = useRecoilValue(totalTrendAtom);
  const [annualnow, setAnnualnow] = useRecoilState(annualNowAtom);
  return (
    <AreaChart
      width={1344}
      height={792}
      data={totalTrendData.genres}
      margin={{ top: 10, right: 10, left: 20, bottom: 10 }}
      onClick={(event) => {
        if (event.activeLabel) {
          setAnnualnow(event.activeLabel);
        }
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#81E47F" stopOpacity={0.2} />
          <stop offset="95%" stopColor="#96BCF2" stopOpacity={0.8} />
        </linearGradient>
      </defs>
      <XAxis dataKey="annual" tick={<CustomXAxisTick />} interval={0} />
      <YAxis
        type="number"
        hide={true}
        domain={[0, "dataMax"]}
        dataKey="ratio"
        tick={false}
      />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip
        content={({ active, payload, label }) => {
          if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
              <div className="custom-tooltip">
                <p>{data.name}</p>
                <p>비율: {Math.round(data.ratio * 100)}%</p>
              </div>
            );
          }
          return null;
        }}
      />
      <Area
        type="monotone"
        dataKey="ratio"
        stroke="none"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
}

export default TotalTrendChart2;
