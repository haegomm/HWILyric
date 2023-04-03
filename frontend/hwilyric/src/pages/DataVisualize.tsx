import AnnualReport from "../components/home/dataVisualize/AnnualReport";
import TotalTrend from "../components/home/dataVisualize/TotalTrend";
import WeeklyReport from "../components/home/dataVisualize/WeeklyReport";
import { DataVisualizePage } from "../styles/DataVisaulizeStyle";

function DataVisualize() {
  return (
    <DataVisualizePage>
      <WeeklyReport />
      <TotalTrend />
      <AnnualReport />
    </DataVisualizePage>
  );
}

export default DataVisualize;
