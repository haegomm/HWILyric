import { useEffect } from "react";
import { TotalTrendDiv } from "../../../styles/DataVisaulizeStyle";
import TotalTrendChart from "./TotalTrendChart";
import TotalTrendChart2 from "./TotalTrendChart2";
import { annualGenre } from "../../../api/visualizingApi";
import { useRecoilState } from "recoil";
import { totalTrendAtom } from "../../../atoms/visualizingAtoms";
import { IAnnualGenreChart } from "../../../types/visualizingType";

function TotalTrend() {
  const [totalTrendData, setTotalTrendData] = useRecoilState(totalTrendAtom);

  return (
    <TotalTrendDiv>
      <TotalTrendChart2></TotalTrendChart2>
    </TotalTrendDiv>
  );
}

export default TotalTrend;
