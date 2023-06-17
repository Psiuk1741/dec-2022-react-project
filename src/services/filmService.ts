import {axiosService} from "./axiosService";
import {urls} from "../constans";


const filmService = {
    getAllMovies:()=>axiosService.get(urls.allMovies.movies),
    getAllMoviesById:(id:number) => axiosService.get(urls.allMovies.byId(id)),
    getAllMoviesByPage:(page:number)=> axiosService.get(urls.allMovies.byPage(page)),
    getMovieByQuery:(page:number, query:string)=>axiosService.get(urls.searchByQuery.byQuery(page, query))

}

export {
    filmService
}