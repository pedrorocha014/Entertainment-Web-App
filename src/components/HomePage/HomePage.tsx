import logo from '../../assets/logo.svg'
import bookmarkIcon from '../../assets/icon-nav-bookmark.svg'
import homeIcon from '../../assets/icon-nav-home.svg'
import moviesIcon from '../../assets/icon-nav-movies.svg'
import seriesIcon from '../../assets/icon-nav-tv-series.svg'
import avatar from '../../assets/image-avatar.png';
import searchIcon from '../../assets/icon-search.svg'
import TrendingCard from '../Cards/TrendingCard'
import { ChangeEvent, useState } from 'react'
import { thumbnailsRecommendedData, thumbnailsTrendingData } from '../../data/thumbnails'
import MediaCard from '../Cards/MediaCard'

const trandingData = thumbnailsTrendingData;
const recommendedData = thumbnailsRecommendedData;

function HomePage() {
    const [trandingMedia, setTrandingMedia] = useState(trandingData);
    const [recommendedMedia, setRecommendedMedia] = useState(recommendedData);
    const [searching, setSearching] = useState(false);


    const searchMedia = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const isSearching = value.length > 0; 

      setSearching(isSearching);

      if(!isSearching){
        setRecommendedMedia(recommendedData);
        return;
      }
      
      const filteredMedias = recommendedMedia.filter(_ => _.title.includes(value));
      setRecommendedMedia(filteredMedias);
    }

    return (
        <div className="bg-[#10141E] absolute w-full h-full">
          <div className="bg-[#161D2F] w-full h-14 flex flex-row justify-between p-4 mb-8">
            <img src={logo} alt="App Logo" />
    
            <div className="flex justify-center space-x-8">
              <img src={bookmarkIcon} alt="Bookmark Icon" />
              <img src={homeIcon} alt="Home Icon" />
              <img src={moviesIcon} alt="Movies Icon" />
              <img src={seriesIcon} alt="Series Icon" />
            </div>
            
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="ml-4 w-full h-6 flex flex-row content-start mb-8">
            <img className="" src={searchIcon} alt="Search Icon" />
            <input onChange={searchMedia} type="text" className="bg-[#10141E] text-white text-base w-3/4 ml-4" placeholder="Search for movies or TV series" />
          </div>
          {!searching && 
            <div className='flex flex-col mb-8'>
              <h1 className="float-left text-white text-lg ml-4 mb-4">
                Trending
              </h1>
              <div className='flex flex-row space-x-4'>
                {trandingMedia.map((element, index) => <TrendingCard key={index} {...element}/>)}
              </div>
            </div>
          }
          <div className='flex flex-col'>
            <h1 className="float-left text-white text-lg ml-4 mb-4">
              Recommended for you
            </h1>
            <div className='flex flex-row flex-wrap justify-around'>
              {recommendedMedia.map((element, index) => <MediaCard key={index} {...element}/>)}
            </div>
          </div>
        </div>
      );
}

export default HomePage;