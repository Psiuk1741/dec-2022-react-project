import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";

import {useParams, useSearchParams} from "react-router-dom";


const Movies: FC = () => {
    const {lightMode} = useAppSelector(state => state.themeReducer);
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();


    useEffect(() => {
        setQuery(prev => ({...prev, page:+query.get('page') || 1}))
    }, [])

    useEffect(()=>{
        const page = +query.get('page');
        dispatch(movieActions.getAllMoviesByPage({page}))

    },[dispatch, query])

    // useEffect(()=>{
    //     dispatch(movieActions.getAllMovies())
    // },[dispatch, query])

    return (
        <div className={lightMode?'movie_wrap_light':'movie_wrap_dark'}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};


export {Movies};