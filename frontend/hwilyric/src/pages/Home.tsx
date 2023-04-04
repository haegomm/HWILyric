import { useRecoilValue } from 'recoil';

import { useHorizontalScroll } from '../features/useHorizontalScroll';
import { HomeContainer, HomeDiv, HomeContent } from '../styles/homeStyle';
import HomeQuickview from '../components/home/HomeQuickview';
import DataVisualizeBlock from '../components/home/dataVisualize/DataVisualizeBlock';
import { IsLoginAtom } from '../atoms/userAtom';
import HomeNotLoggedIn from '../components/home/HomeNotLoggedIn';
import HomeCenter from '../components/home/HomeCenter';
import { DataVisualizeBlockStyle, DataVisualizeStyle } from '../styles/dataVisualizeStyle';

function Home() {
    const scrollRef = useHorizontalScroll();
    const isLogin = useRecoilValue(IsLoginAtom);
    return (
        <HomeContainer ref={scrollRef}>
            <HomeContent>
                <HomeDiv>
                    {isLogin ? 
                        <HomeQuickview />
                        : <HomeNotLoggedIn />
                    }
                </HomeDiv>
                <HomeCenter />
                <DataVisualizeBlockStyle>
                    <DataVisualizeBlock />
                </DataVisualizeBlockStyle>
                <DataVisualizeBlockStyle>
                    <DataVisualizeBlock />
                </DataVisualizeBlockStyle>
                <DataVisualizeBlockStyle>
                    <DataVisualizeBlock />
                </DataVisualizeBlockStyle>
            </HomeContent>
        </HomeContainer>        
    )
}

export default Home
