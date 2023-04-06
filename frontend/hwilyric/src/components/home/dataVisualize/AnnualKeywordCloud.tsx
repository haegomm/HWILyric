import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import { IAnnaulKeywordOptions } from "../../../types/visualizingType";
import { annualNowAtom } from "../../../atoms/visualizingAtoms";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { annualData } from "../../../api/visualizingApi";
import axios from "axios";
import { isModifyingAtom } from "../../../atoms/mypageAtom";
import {
  blockListState,
  noteIdState,
  noteThumbnailFileState,
  noteThumbnailUrlState,
  titleState,
} from "../../../atoms/noteAtoms";
import { memoState } from "../../../atoms/sidebarAtoms";
import { useNavigate } from "react-router-dom";

const annualData2 = async (annualnow: any) => {
  const res = await axios.get(
    "https://j8b107.p.ssafy.io/api/trend/annual/" + annualnow
  );
  return res.data;
};

function AnnualKeywordCloud() {
  const navigate = useNavigate();
  const isModifying = useSetRecoilState(isModifyingAtom);
  const setTitle = useSetRecoilState(titleState);
  const resetNoteId = useResetRecoilState(noteIdState);
  const resetBlockList = useResetRecoilState(blockListState);
  const resetMemo = useResetRecoilState(memoState);
  const resetThumbnail = useResetRecoilState(noteThumbnailUrlState);
  const resetThumbnailFile = useResetRecoilState(noteThumbnailFileState);

  const annualnow = useRecoilValue(annualNowAtom);
  const [keywords, setKeywords] = useState([{ text: "", value: 0 }]);
  const getData = async () => {
    const data = await annualData2(annualnow);
    const keywordsData = data.keywords;
    const resultData = [];
    for (let i = 0; i < 50; i++) {
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
  const onCloudHandler = (word: any, event: any) => {
    isModifying(true);
    setTitle(word.text);
    resetNoteId();
    resetBlockList();
    resetMemo();
    resetThumbnail();
    resetThumbnailFile();
    navigate("/write");
  };

  return (
    <div style={{ width: "420px", height: "536px", userSelect: "none" }}>
      <ReactWordcloud
        words={keywords}
        minSize={[420, 536]}
        size={[420, 536]}
        callbacks={{ onWordClick: onCloudHandler }}
        options={{
          rotations: 2,
          rotationAngles: [0, 0],
          fontSizes: [20, 40],
          enableTooltip: false,
          tooltipOptions: {
            aria: {
              content: "describedby",
              expanded: "auto",
            },
            animateFill: true,
            interactiveBorder: 2,
          },
        }}
      />
    </div>
  );
}

export default AnnualKeywordCloud;
