import { TotalTrendDiv } from "../../../styles/DataVisaulizeStyle";
import TotalTrendChart from "./TotalTrendChart";
import { useTheme } from "styled-components";

function TotalTrend() {
  const theme = useTheme();
  return (
    <TotalTrendDiv theme={theme}>
      <TotalTrendChart></TotalTrendChart>
    </TotalTrendDiv>
  );
}

export default TotalTrend;
