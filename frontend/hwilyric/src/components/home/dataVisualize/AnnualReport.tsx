import { AnnualReportDiv } from "../../../styles/DataVisaulizeStyle";
import AnnualGenre from "./AnnualGenre";
import AnnualKeyword from "./AnnualKeyword";

function AnnualReport() {
  return (
    <AnnualReportDiv>
      <AnnualGenre></AnnualGenre>
      <AnnualKeyword></AnnualKeyword>
    </AnnualReportDiv>
  );
}

export default AnnualReport;
