import AnnualReport from "../components/dataVisualize/AnnualReport";
import WeeklyReport from "../components/dataVisualize/WeeklyReport";
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
