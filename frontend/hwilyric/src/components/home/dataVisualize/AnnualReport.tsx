import { AnnualReportDiv } from "../../../styles/DataVisaulizeStyle";
import AnnualGenre from "./AnnualGenre";
import AnnualKeyword from "./AnnualKeyword";

function AnnualReport(props: any) {
  return (
    <AnnualReportDiv>
      <AnnualGenre />
      <AnnualKeyword />
    </AnnualReportDiv>
  );
}

export default AnnualReport;
