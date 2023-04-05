import styled from "styled-components";
import { lightTheme } from "../theme/theme";

export const DataVisualizePage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1800px;
`;

export const WeeklyReportDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${(368 / 1920) * 100}vw;
  height: 800px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-image: linear-gradient(
      to right bottom,
      #ace5f8,
      #e6b2fd,
      #fdbfb4,
      #fbd1dd
    )
    1;
`;

export const WeeklyReportTitle = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  height: 40px;
  font-size: 32px;
`;

export const WeeklyReportSubtitle = styled.p`
  display: flex;
  width: 168px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const WeeklyReportKeywordsDiv = styled.div`
  width: 312px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const WeeklyReportGenreDiv = styled.div`
  width: 312px;
  height: 244px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AnnualReportDiv = styled.div`
  width: 420px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AnnualReportTitle = styled.title`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const AnnualGenreDiv = styled.div`
  width: 420px;
  height: 380px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-image: linear-gradient(
      to right top,
      #b0e3f9,
      #deb3fb,
      #fec3b5,
      #fbd5e0
    )
    2;
  & path {
    opacity: ${(props) => (props.theme === lightTheme ? "1" : "0.7")};
  }
  & div {
    background: "#636161";
  }
`;

export const TotalTrendDiv = styled.div`
  width: ${(1144 / 1920) * 100}vw;
  height: 800px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-image: linear-gradient(
      to right top,
      #b0e3f9,
      #deb3fb,
      #fec3b5,
      #fbd5e0
    )
    2;
`;

// & path {
//   opacity: ${(props) => (props.theme === lightTheme ? "0.2" : "1")};
// }

export const AnnualKeywordDiv = styled.div`
  width: 420px;
  height: 392px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-image: linear-gradient(
      to right top,
      #b0e3f9,
      #deb3fb,
      #fec3b5,
      #fbd5e0
    )
    2;
`;

export const WeeklyKeywordLineDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const WeeklyKeywordBlockP = styled.p`
  width: 88px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.theme === lightTheme ? "1" : "0.7")};
`;

export const AnnualGenreSongDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  width: 420px;
  height: 60px;
`;
