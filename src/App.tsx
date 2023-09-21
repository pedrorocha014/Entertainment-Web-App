import AccessPage from "./components/AccessPage/AccessPage";

import logo from './assets/logo.svg'
import bookmarkLogo from './assets/icon-nav-bookmark.svg'
import homeLogo from './assets/icon-nav-home.svg'
import moviesLogo from './assets/icon-nav-movies.svg'
import seriesLogo from './assets/icon-nav-tv-series.svg'
import avatar from './assets/image-avatar.png';

function App() {
  return (
    <div className="bg-[#10141E] absolute w-full h-full">
      <div className="bg-[#161D2F] absolute w-full h-14 flex flex-row justify-between p-4">
        <img src={logo} alt="App Logo" />

        <div className="flex justify-center space-x-8">
          <img src={bookmarkLogo} alt="Bookmark Logo" />
          <img src={homeLogo} alt="Home Logo" />
          <img src={moviesLogo} alt="Movies Logo" />
          <img src={seriesLogo} alt="Series Logo" />
        </div>
        
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default App;
