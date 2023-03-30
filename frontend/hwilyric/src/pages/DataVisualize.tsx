import AnnualReport from "../components/home/dataVisualize/AnnualReport";
import WeeklyReport from "../components/home/dataVisualize/WeeklyReport";
import { DataVisualizePage } from "../styles/DataVisaulizeStyle";

function DataVisualize() {
  return (
    <DataVisualizePage>
      <WeeklyReport />
      <AnnualReport />
    </DataVisualizePage>
  );
}

export default DataVisualize;
