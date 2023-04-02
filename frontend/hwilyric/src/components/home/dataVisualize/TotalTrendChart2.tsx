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

function TotalTrendChart2(props: any) {
  const totalTrendData = useRecoilValue(totalTrendAtom);
  const [annualnow, setAnnualnow] = useRecoilState(annualNowAtom);
  return (
    <AreaChart
      width={1352}
      height={700}
      data={totalTrendData.genres}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      onClick={(event) => {
        if (event.activeLabel) {
          setAnnualnow(event.activeLabel);
        }
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="annual" />
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
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
}

export default TotalTrendChart2;
