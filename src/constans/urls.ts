const baseURL = 'https://api.themoviedb.org/3';

const imagesUrl = 'https://image.tmdb.org/t/p/w500';

const movies = '/discover/movie';
const movie = '/movie';
const genre = '/genre/movie/list?language=uk';
const search = '/search/movie';

const urls = {
    allMovies: {
        movies,
        byPage: (page: number) => `${movies}?&page=${page}&language=uk`,
        byId: (id: number) => `${movie}/${id}?language=uk&append_to_response=videos,images,credits`
    },
    // top_up: {
    //     topUP: (page: number, path: string) => `${movie}/${path}?page=${page}&language=uk`
    // },
    // oneMovie: {
    //     movie: (movieId: number) => `${movie}/${movieId}?language=uk&append_to_response=videos,images,credits`
    // },
    searchByQuery: {
        search,
        byQuery: (page:number, query:string) => `${search}?query=${query}&page=${page}&language=uk`
    },
    // allGenre: {
    //     genre
    // }
};

export {
    baseURL,
    imagesUrl,
    urls
}