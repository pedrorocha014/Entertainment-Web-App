import bookmarkIconEmpty from '../../assets/icon-bookmark-empty.svg';
import { Thumbnails } from '../../data/thumbnails';

function TrendingCard(prop: Thumbnails) {
    return (
        <div 
          style={{backgroundImage: `url(${prop.imgTrending})`}} 
          className={`
            w-60 h-36 
            rounded-2xl
            flex flex-col justify-between
            bg-cover
          `}
        >
            <button className="rounded-full bg-[#10141E]/50 w-8 h-8 mr-2 mt-2 place-self-end flex flex-row justify-center items-center" type="button">
              <img src={bookmarkIconEmpty} alt="Bookmark Icon" />
            </button>
            <div>
              <h1 className="ml-4 text-neutral-300">{`${prop.year} . ${prop.type} . ${prop.classification}`}</h1>
              <h1 className="ml-4 text-white font-bold">{prop.title}</h1>
            </div>
        </div>
    );
}

export default TrendingCard;