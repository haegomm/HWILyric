import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import { IAnnaulKeywordOptions } from "../../../types/visualizingType";
import { annualNowAtom } from "../../../atoms/visualizingAtoms";
import { useRecoilValue } from "recoil";
import { annualData } from "../../../api/visualizingApi";
import axios from "axios";

const options: IAnnaulKeywordOptions = {
  rotations: 2,
  rotationAngles: [0, 0],
  fontSizes: [20, 40],
};

const annualData2 = async (annualnow: any) => {
  const res = await axios.get(
    "https://j8b107.p.ssafy.io/api/trend/annual/" + annualnow
  );
  return res.data;
};

function AnnualKeywordCloud() {
  const annualnow = useRecoilValue(annualNowAtom);
  const [keywords, setKeywords] = useState([{ text: "", value: 0 }]);
  const getData = async () => {
    const data = await annualData2(annualnow);
    const keywordsData = data.keywords;
    const resultData = [];
    for (let i = 0; i < 30; i++) {
      resultData.push({
        text: keywordsData[i].word,
        value: keywordsData[i].count,
      });
    }

    setKeywords(resultData);
  };
  useEffect(() => {
    getData();
  }, [annualnow]);
  if (keywords[0].text === "") {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ width: "420px", height: "288px" }}>
      <ReactWordcloud
        words={keywords}
        minSize={[420, 288]}
        size={[420, 288]}
        options={options}
      />
    </div>
  );
}

export default AnnualKeywordCloud;
