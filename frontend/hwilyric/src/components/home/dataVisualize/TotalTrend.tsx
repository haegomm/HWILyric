import { TotalTrendDiv } from "../../../styles/DataVisaulizeStyle";
import TotalTrendChart from "./TotalTrendChart";
import { useTheme } from "styled-components";
import AnnualReport from "./AnnualReport";

function TotalTrend(props: any) {
  const theme = useTheme();
  return (
    <TotalTrendDiv theme={theme}>
      <TotalTrendChart />
    </TotalTrendDiv>
  );
}

export default TotalTrend;
