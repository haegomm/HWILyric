import React, { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import {
  IAnnaulKeywordOptions,
  IAnnualKeywordData,
} from "../../../types/visualizingType";
import { annualNowAtom } from "../../../atoms/visualizingAtoms";
import { useRecoilValue } from "recoil";
import { annualData } from "../../../api/visualizingApi";

const options: IAnnaulKeywordOptions = {
  rotations: 2,
  rotationAngles: [0, 0],
  fontSizes: [20, 50],
};

function AnnualKeywordCloud() {
  const annualnow = useRecoilValue(annualNowAtom);
  const keywords: any = [];
  const getData = async () => {
    const data = await annualData(annualnow);
    for (const i of data.keywords.slice(0, 100))
      keywords.push({ text: i.word, value: i.count });
  };
  getData();
  return (
    <ReactWordcloud words={keywords} minSize={[420, 300]} options={options} />
  );
}

export default AnnualKeywordCloud;
