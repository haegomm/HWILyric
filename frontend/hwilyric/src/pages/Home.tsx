import { useRecoilValue } from 'recoil';

import { useHorizontalScroll } from '../features/useHorizontalScroll';
import { HomeContainer, HomeDiv, HomeContent } from '../styles/homeStyle';
import HomeQuickview from '../components/home/HomeQuickview';
import DataVisualizeBlock from '../components/home/dataVisualize/DataVisualizeBlock';
import { IsLoginAtom } from '../atoms/userAtom';
import HomeNotLoggedIn from '../components/home/HomeNotLoggedIn';
import HomeCenter from '../components/home/HomeCenter';

function Home() {
    const scrollRef = useHorizontalScroll();
    const isLogin = useRecoilValue(IsLoginAtom);
    return (
        <HomeContainer ref={scrollRef}>
            <HomeDiv>
                <HomeContent>
                    {isLogin ? 
                        <HomeQuickview />
                        : <HomeNotLoggedIn />
                    }
                    <HomeCenter />
                    <DataVisualizeBlock />
                    <DataVisualizeBlock />
                    <DataVisualizeBlock />
                    <DataVisualizeBlock />
                </HomeContent>
            </HomeDiv>
        </HomeContainer>        
    )
}

export default Home
