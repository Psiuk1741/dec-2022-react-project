
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {filmService} from "../../services/filmService";
import {Axios, AxiosError} from "axios";
import {IPagination, IMovie} from "../../interfaces";


interface IState{
    movies: IMovie[];
    movie: IMovie,
    page: number,
    genre: string,
    totalPages:number,
    toogle:boolean,
    queryMovie:string,
    queryYear: number

}

const initialState: IState = {

    movies: [],
    movie: null,
    page: 1,
    genre: 'Crime',
    totalPages:null,
    toogle: false,
    queryMovie:'',
    queryYear: null
};

const getAllMovies = createAsyncThunk<IPagination<IMovie[]>,void>(
    'movieSlice/getAlMovies',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await filmService.getAllMovies();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }

)

const getAllMoviesByPage = createAsyncThunk<IPagination<IMovie[]>,{page: number}>(
    'movieSlice/getAllMoviesByPage',
    async ({page}, {rejectWithValue})=>{
        try {
            const {data} = await filmService.getAllMoviesByPage(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }

)

const getMovieById = createAsyncThunk<IMovie,{id:string}>(
    'movieSlice/getMovieById',
    async ({id}, {rejectWithValue})=>{
        try {
            const {data} = await filmService.getAllMoviesById(+id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }

)

const getSearchMovieByQuery = createAsyncThunk<IPagination<IMovie[]>,{page:number, query:string}>(
'moviesSlice/getSearchMovieByQuery',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await filmService.getMovieByQuery(page, query);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        setMovies: (state, action) =>{
            const {page, total_pages, results} = action.payload;
            state.movies = results
            state.page = page
            state.totalPages = total_pages
        },

        setMovieId:(state, action)=>{
            state.movie = action.payload;
        },

        setQuery:(state, action) =>{
            state.queryMovie = action.payload
        },

        setYear:(state, action) =>{
            state.queryYear = action.payload
        },


    },
    extraReducers:builder => builder


        .addCase(getMovieById.fulfilled, (state, action)=>{
            state.movie = action.payload;
            state.toogle = false;
        })

        .addCase(getMovieById.pending, (state, action)=>{
            state.toogle = true;
        })
        .addCase(getAllMovies.fulfilled, (state, action)=>{
           // state.movies = action.payload
            const {page,results} = action.payload;
                state.movies = results
                state.page = page

        })

        .addCase(getAllMoviesByPage.fulfilled, (state,action)=>{
            const {page, results} = action.payload;
                state.movies = results
                state.page = page
        })

        .addCase(getSearchMovieByQuery.fulfilled, (state, action) => {
            const {page, results} = action.payload;
            state.movies = results;
            state.page = page;
        })
});

const {actions, reducer: movieReducer} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
    getMovieById,
    getAllMoviesByPage,
    getSearchMovieByQuery

};

export {
    movieReducer,
    movieActions
}