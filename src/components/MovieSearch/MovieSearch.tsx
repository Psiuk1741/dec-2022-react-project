import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {Movie} from "../Movie/Movie";

const MovieSearch:FC = () => {
    const {lightMode} = useAppSelector(state => state.themeReducer);
    const {movies} = useAppSelector(state => state.movieReducer);

    return (
        <div className={lightMode?'movie_wrap_light':'movie_wrap_dark'}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export  {MovieSearch};