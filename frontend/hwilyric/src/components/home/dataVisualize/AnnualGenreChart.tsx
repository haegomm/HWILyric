import { ResponsivePie } from "@nivo/pie";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  annualNowAtom,
  annualNowSongAtom,
} from "../../../atoms/visualizingAtoms";
import { AnnualReportTitle } from "../../../styles/DataVisaulizeStyle";
import { useTheme } from "styled-components";
import { lightTheme } from "../../../theme/theme";

const colorArr = [
  ["#81E47F", "#96BCF2"],
  ["#88C4E9", "#D1C4F1"],
  ["#CD2D87", "#71C6C9"],
  ["#841B95", "#E399E4"],
  ["#E4B2FA", "#FDC3B7"],
  ["#FACFD6", "#B1ADF6"],
  ["#ACE5F8", "#E6B2FD"],
  ["#FDBFB4", "#FBD1DD"],
  ["#FDC3B7", "#FACFD6"],
  ["#E6B2FD", "#FDBFB4"],
];

function AnnualGenreChart(props: any) {
  const annualnow = useRecoilValue(annualNowAtom);
  const setAnnualnowSong = useSetRecoilState(annualNowSongAtom);
  function myFunc(node: any, event: Object) {
    if (node && node.id !== "기타") {
      setAnnualnowSong(node.id);
    }
  }
  const theme = useTheme();

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <AnnualReportTitle>{annualnow}년대 인기 장르</AnnualReportTitle>
      <ResponsivePie
        data={props.data}
        margin={{ top: 10 }}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={0}
        colors={[
          "#E4B2FA",
          "#96BCF2",
          "#88C4E9",
          "#D1C4F1",
          "#CD2D87",
          "#71C6C9",
          "#841B95",
          "#E399E4",
        ]}
        borderWidth={1}
        sortByValue={true}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLabel="id"
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={20}
        arcLabelsRadiusOffset={0.6}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[]}
        onClick={myFunc}
        tooltip={({ datum }) => (
          <div
            style={{
              background: "white",
              color: "black",
              fontSize: "inherit",
              borderRadius: "2px",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px; padding: 5px 9px",
            }}
          >
            <div
              style={{
                whiteSpace: "pre",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "12px",
                  height: "12px",
                  background: `${datum.color}`,
                  marginRight: "7px",
                }}
              ></span>
              <span>
                {datum.label} :{" "}
                <strong>{Math.round(datum.value * 100)}%</strong>
              </span>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default AnnualGenreChart;
