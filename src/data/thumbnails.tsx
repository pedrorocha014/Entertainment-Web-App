export interface Thumbnails {
    title: string,
    type: string,
    year: string,
    classification: string,
    isTrending: boolean,
    imgRegularSmall: string,
    imgRegularMedium: string,
    imgRegularLarge: string,
    imgTrendingSmall?: string,
    imgTrendingLarge?: string
}

const thumbnailsData: Thumbnails[] = [
    {
        title: '1998',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: true,
        imgRegularSmall: 'assets/thumbnails/1998/regular/small.jpg',
        imgRegularMedium: 'assets/thumbnails/1998/regular/medium.jpg',
        imgRegularLarge: 'assets/thumbnails/1998/regular/large.jpg',
        imgTrendingSmall: 'assets/thumbnails/1998/trending/small.jpg',
        imgTrendingLarge: 'assets/thumbnails/1998/trending/large.jpg'
    },
    {
        title: '1998',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: true,
        imgRegularSmall: 'assets/thumbnails/1998/regular/small.jpg',
        imgRegularMedium: 'assets/thumbnails/1998/regular/medium.jpg',
        imgRegularLarge: 'assets/thumbnails/1998/regular/large.jpg',
        imgTrendingSmall: 'assets/thumbnails/1998/trending/small.jpg',
        imgTrendingLarge: 'assets/thumbnails/1998/trending/large.jpg'
    },
    {
        title: '1998',
        type: 'Movie',
        year: '2005',
        classification: 'L',
        isTrending: true,
        imgRegularSmall: 'assets/thumbnails/1998/regular/small.jpg',
        imgRegularMedium: 'assets/thumbnails/1998/regular/medium.jpg',
        imgRegularLarge: 'assets/thumbnails/1998/regular/large.jpg',
        imgTrendingSmall: 'assets/thumbnails/1998/trending/small.jpg',
        imgTrendingLarge: 'assets/thumbnails/1998/trending/large.jpg'
    }
]

export default thumbnailsData;