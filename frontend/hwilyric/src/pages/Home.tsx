import { useRecoilValue } from "recoil";

import { useHorizontalScroll } from "../features/useHorizontalScroll";
import {
  HomeContainer,
  HomeDiv,
  HomeContent,
  HomeTrapezoid,
  ArrowContainerDiv,
} from "../styles/homeStyle";
import HomeQuickview from "../components/home/HomeQuickview";
import { IsLoginAtom } from "../atoms/userAtom";
import HomeNotLoggedIn from "../components/home/HomeNotLoggedIn";
import HomeCenter from "../components/home/HomeCenter";
import { darkTrape, lightTrape } from "../assets/icon/myButtons";
import { DataVisualizePage } from "../styles/DataVisaulizeStyle";
import WeeklyReport from "../components/home/dataVisualize/WeeklyReport";
import TotalTrend from "../components/home/dataVisualize/TotalTrend";
import AnnualReport from "../components/home/dataVisualize/AnnualReport";
import { useTheme } from "styled-components";
import { useRef } from "react";
import { FiChevronsRight } from "react-icons/fi";

function Home() {
  const myRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const scrollRef = useHorizontalScroll();
  const isLogin = useRecoilValue(IsLoginAtom);

  const moveToTrendChart = () => {
    // if (myRef.current) {
    //   myRef.current.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    // }
    // window.scrollTo({ left: 1000, behavior: "smooth" });
    window.scrollTo({ left: 2000, top: 0 });
  };

  return (
    <HomeContainer ref={scrollRef}>
      <ArrowContainerDiv>
        <FiChevronsRight
          onClick={moveToTrendChart}
          href="#there"
          size={124}
          color="#E4B2FA"
          style={{
            position: "absolute",
            top: "320px",
            left: "1400px",
            opacity: "0.4",
          }}
        />
      </ArrowContainerDiv>
      <HomeTrapezoid src={lightTrape} />
      <HomeContent>
        <HomeDiv onClick={moveToTrendChart}>
          {isLogin ? <HomeQuickview /> : <HomeNotLoggedIn />}
        </HomeDiv>
        <HomeCenter />
        <DataVisualizePage theme={theme}>
          <WeeklyReport />
          <TotalTrend className="there" />
          <AnnualReport ref={myRef} />
        </DataVisualizePage>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;
