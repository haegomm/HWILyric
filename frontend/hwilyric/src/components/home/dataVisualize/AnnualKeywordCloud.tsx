import React, { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import {
  IAnnaulKeywordOptions,
  IAnnualKeywordData,
} from "../../../types/visualizingType";
import { annualNowAtom } from "../../../atoms/visualizingAtoms";
import { useRecoilValue } from "recoil";
import { annualData } from "../../../api/visualizingApi";
import axios from "axios";
import { getDatasetAtEvent } from "react-chartjs-2";

const options: IAnnaulKeywordOptions = {
  rotations: 2,
  rotationAngles: [0, 0],
  fontSizes: [20, 50],
};

function AnnualKeywordCloud() {
  const annualnow = useRecoilValue(annualNowAtom);
  const [keywords, setKeywords] = useState([{ text: "", value: 0 }]);
  const getData = async () => {
    const data = await annualData(annualnow);
    const keywordsData = data.keywords;
    const resultData = [];
    for (let i = 0; i < 25; i++) {
      resultData.push({ text: keywordsData.word, value: keywordsData.count });
    }
    setKeywords(resultData);
  };
  useEffect(() => {
    getData();
  }, [annualnow]);
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
