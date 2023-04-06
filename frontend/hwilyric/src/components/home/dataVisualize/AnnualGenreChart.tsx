import { ResponsivePie } from "@nivo/pie";
import { useSetRecoilState } from "recoil";
import { annualNowSongAtom } from "../../../atoms/visualizingAtoms";

function AnnualGenreChart(props: any) {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const setAnnualnowSong = useSetRecoilState(annualNowSongAtom);
  function myFunc(node: any, event: Object) {
    if (node && node.id !== "기타") {
      setAnnualnowSong(node.id);
    }
  }

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      onDragStart={handleDragStart}
    >
      <ResponsivePie
        data={props.data}
        margin={{ top: 10 }}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={0}
        colors={[
          "#deb3fb",
          "#Fbd5e0",
          "#c9387d",
          "#9e9ade",
          "#afd7d8",
          "#96aee8",
          "#fec3b5",
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
