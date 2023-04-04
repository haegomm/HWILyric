import { WeeklyReportGenreDiv } from "../../../styles/DataVisaulizeStyle";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";

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

function WeeklyReportGenre(props: any) {
  return (
    <WeeklyReportGenreDiv>
      <BarChart
        width={304}
        height={264}
        data={props.data.length !== 0 ? props.data : []}
        margin={{ top: 10, bottom: 30, left: 20, right: 20 }}
        barCategoryGap={20}
      >
        <defs>
          <linearGradient id="colorBar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="40%" stopColor="#88C4E9" stopOpacity={0.7} />
            <stop offset="80%" stopColor="#D1C4F1" stopOpacity={0.7} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={<CustomXAxisTick />} interval={0} />
        <YAxis hide={true} />
        <Tooltip />
        <Bar dataKey="count" fill="url(#colorBar)" barSize={50} />
      </BarChart>
    </WeeklyReportGenreDiv>
  );
}

export default WeeklyReportGenre;
