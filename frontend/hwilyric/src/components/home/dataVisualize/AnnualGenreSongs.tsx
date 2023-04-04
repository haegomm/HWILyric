import { useRecoilValue } from "recoil";
import { annualNowSongAtom } from "../../../atoms/visualizingAtoms";
import { AnnualGenreSongDiv } from "../../../styles/DataVisaulizeStyle";

function AnnualGenreSongs(props: any) {
  const annualnowsong = useRecoilValue(annualNowSongAtom);
  return (
    <AnnualGenreSongDiv>
      {props.data[annualnowsong].map((song: any) => (
        <div key={song}>{song}</div>
      ))}
    </AnnualGenreSongDiv>
  );
}

export default AnnualGenreSongs;
