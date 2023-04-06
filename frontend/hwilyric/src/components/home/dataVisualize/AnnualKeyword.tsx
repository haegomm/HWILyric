import { AnnualKeywordDiv } from "../../../styles/DataVisaulizeStyle";
import AnnualKeywordCloud from "./AnnualKeywordCloud";
import { useRecoilValue } from "recoil";
import { annualNowAtom } from "../../../atoms/visualizingAtoms";

function AnnualKeyword(props: any) {
  const annualnow = useRecoilValue(annualNowAtom);
  return (
    <AnnualKeywordDiv>
      <div
        style={{
          width: "420px",
          height: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {annualnow}년대 인기 키워드
      </div>
      <AnnualKeywordCloud />
    </AnnualKeywordDiv>
  );
}

export default AnnualKeyword;
