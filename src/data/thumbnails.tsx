import _1998Trending from '../assets/thumbnails/1998/trending/small.jpg';
import _1998Regular from '../assets/thumbnails/1998/regular/small.jpg';
import asiain24daysRegular from '../assets/thumbnails/asia-in-24-days/regular/small.jpg';
import duringthehuntRegular from '../assets/thumbnails/during-the-hunt/regular/small.jpg';
import loneheartRegular from '../assets/thumbnails/lone-heart/regular/small.jpg';
import missionsaturnRegular from '../assets/thumbnails/mission-saturn/regular/small.jpg';

export interface Thumbnails {
    title: string,
    type: string,
    year: string,
    classification: string,
    isTrending: boolean,
    imgRegular: string,
    imgTrending?: string,
}

export const thumbnailsRecommendedData: Thumbnails[] = [
    {
        title: '1998a',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: true,
        imgRegular: _1998Regular,
        imgTrending: _1998Trending,
    },
    {
        title: 'Asiain 24 Days',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: false,
        imgRegular: asiain24daysRegular,
    },
    {
        title: 'During the Hunt',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: false,
        imgRegular: duringthehuntRegular,
    },
    {
        title: 'Lone Heart',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: false,
        imgRegular: loneheartRegular,
    },
    {
        title: 'Mission Saturn',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: false,
        imgRegular: missionsaturnRegular,
    }
]

export const thumbnailsTrendingData: Thumbnails[] = [
    {
        title: '1998a',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: true,
        imgRegular: _1998Regular,
        imgTrending: _1998Trending,
    },
    {
        title: '1998a',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: true,
        imgRegular: _1998Regular,
        imgTrending: _1998Trending,
    }
]