import styled from "styled-components";
import { lightTheme } from "../theme/theme";

export const DataVisualizePage = styled.div`
  display: flex;
  justify-content: center;
  width: 2800px;
  background: ${(props) => (props.theme === lightTheme ? "white" : "#191b1f")};
`;

export const WeeklyReportDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 440px;
  height: 80vh;
  margin-left: 20px;
  margin-right: 20px;
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
  margin-left: 20px;
  margin-right: 20px;
`;

export const WeeklyReportTitle = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  height: 32px;
  font-size: 24px;
`;

export const WeeklyReportSubtitle = styled.p`
  display: flex;
  width: 168px;
  height: 24px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const WeeklyReportKeywordsDiv = styled.div`
  width: 312px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
`;

export const WeeklyReportGenreDiv = styled.div`
  width: 312px;
  height: 244px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AnnualReportDiv = styled.div`
  width: ${(1200 / 1920) * 100}vw;
  height: 80vh;
  display: flex;
  justify-content: space-around;
`;

export const AnnualReportTitle = styled.title`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-item: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const AnnualGenreDiv = styled.div`
  width: 600px;
  height: 80vh;
  margin-left: 20px;
  margin-right: 20px;
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
  width: 1248px;
  height: 80vh;
  padding-top: 100px;
  margin-right: 20px;
  margin-left: 20px;
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
  width: 600px;
  height: 80vh;
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
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-left: 20px;
  margin-right: 20px;
`;

export const WeeklyKeywordLineDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  opacity: ${(props) => (props.theme === lightTheme ? "1" : "0.7")};
  margin: 4px 12px;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgb(251, 213, 224, 0.25);
  cursor: pointer;
`;

export const AnnualGenreSongDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  width: 420px;
  height: 80px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const WeeklyReportGenreInterval = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const WeeklyGenreIntervalText = styled.div`
  font-size: 8px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: 8px;
`;

export const WeeklyReportMoveBox = styled.div`
  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeeklyReportMoveArrow = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const TotalTrendGenreTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
