import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import { ActorCard } from '../ActorCard/ActorCard';
import css from './Actors.module.css'

const Actors:FC = () => {
    const {movie} = useAppSelector(state => state.movieReducer);
    return (
        <div className={`${css.actorsBox}`}>
            {movie?.credits && movie?.credits?.cast.map(actor => <ActorCard key={actor.credit_id} actor={actor}/>)}


        </div>
    );
};

export {Actors};