import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {imagesUrl} from '../../constans'
import empty from '../../images/empty.png'
import {Loader} from "../Loader/Loader";
import {MovieText} from "../MovieText/MovieText";
import {Actors} from "../Actors/Actors";
import { Video } from '../Video/Video';
import { Posters } from '../Posters/Posters';

import css from './MovieInfo.module.css'

const MovieInfo:FC = () => {
    const {lightMode} = useAppSelector(state => state.themeReducer);
    const {movie, toogle} = useAppSelector(state => state.movieReducer);
    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(id){
            dispatch(movieActions.getMovieById({id}))
            dispatch(movieActions.setMovieId({id}))
        }

    },[id, dispatch])


    const posterPath = movie?.poster_path
    return (
        <div>
            { toogle ? <Loader/>: ( movie &&(
                <div className={lightMode? css.movie_wrap_light:css.movie_wrap_dark}>
                    <div className={css.main_div}>

                            {movie.poster_path ?
                                <img className={css.main_poster} src={imagesUrl+`${movie.poster_path}`}
                                     alt={movie.title}

                                /> :
                                <img className={css.main_poster}
                                     src={`https://www.prokerala.com/movies/assets/img/no-poster-available.webp`}
                                     alt={movie.title}

                                />}



                    <MovieText/>
                    </div>


                    {movie?.credits.cast[0] && <h2>Акторський склад :</h2>}
                    <div className={css.actors_div}>
                    {movie?.credits?.cast[0] && <Actors/>}
                    </div>

                    {movie.videos && <h2>Трейлери : </h2>}
                    <div className={css.trailer_div}>
                    {movie.videos && <Video/>}
                    </div>

                    {movie?.images.posters[0] && <h2>Постери :</h2>}
                    {movie?.images.posters[0] && <Posters/>}
                </div>

            ))
            }
        </div>
    );
};

export  {MovieInfo};