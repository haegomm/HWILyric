import HomeContent from '../components/home/HomeContent';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function Home({ isDarkMode, toggleDarkMode }: any) {
    return (
        <div>
        <button
            type="button"
            onClick={toggleDarkMode}
        >
            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
        <h1>HWILyric</h1>
            <HomeContent />
        </div>        
    )
}

export default Home
