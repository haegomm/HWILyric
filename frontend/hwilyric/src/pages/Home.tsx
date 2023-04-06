import { useRecoilValue } from "recoil";

import { useHorizontalScroll } from "../features/useHorizontalScroll";
import {
  HomeContainer,
  HomeDiv,
  HomeContent,
  HomeTrapezoid,
} from "../styles/homeStyle";
import HomeQuickview from "../components/home/HomeQuickview";
import { IsLoginAtom } from "../atoms/userAtom";
import HomeNotLoggedIn from "../components/home/HomeNotLoggedIn";
import HomeCenter from "../components/home/HomeCenter";
import { lightTrape } from "../assets/icon/myButtons";
import { DataVisualizePage } from "../styles/DataVisaulizeStyle";
import WeeklyReport from "../components/home/dataVisualize/WeeklyReport";
import TotalTrend from "../components/home/dataVisualize/TotalTrend";
import AnnualReport from "../components/home/dataVisualize/AnnualReport";

import { useTheme } from "styled-components";

function Home() {
  const theme = useTheme();
  const scrollRef = useHorizontalScroll();
  const isLogin = useRecoilValue(IsLoginAtom);
  return (
    <HomeContainer ref={scrollRef}>
      <HomeTrapezoid src={lightTrape} />
      <HomeContent>
        <HomeDiv>{isLogin ? <HomeQuickview /> : <HomeNotLoggedIn />}</HomeDiv>
        <HomeCenter />
        <DataVisualizePage theme={theme}>
          <WeeklyReport />
          <TotalTrend />
          <AnnualReport />
        </DataVisualizePage>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;
