import { useEffect } from "react";
import { TotalTrendDiv } from "../../../styles/DataVisaulizeStyle";
import TotalTrendChart from "./TotalTrendChart";
import TotalTrendChart2 from "./TotalTrendChart2";
import { annualGenre } from "../../../api/visualizingApi";
import { useRecoilState } from "recoil";
import { totalTrendAtom } from "../../../atoms/visualizingAtoms";
import { IAnnualGenreChart } from "../../../types/visualizingType";
import { useTheme } from "styled-components";

function TotalTrend() {
  const [totalTrendData, setTotalTrendData] = useRecoilState(totalTrendAtom);
  const theme = useTheme();
  return (
    <TotalTrendDiv theme={theme}>
      <TotalTrendChart2></TotalTrendChart2>
    </TotalTrendDiv>
  );
}

export default TotalTrend;
