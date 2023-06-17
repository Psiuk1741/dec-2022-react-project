import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import { PosterCard } from '../PosterCard/PosterCard';

import css from './Posters.module.css'
const Posters: FC = () => {
    const {movie} = useAppSelector(state => state.movieReducer);
    return (
        <div className={`${css.postersBox}`}>
            {movie?.images?.posters[0] && movie?.images?.posters.map(poster => <PosterCard
                key={poster.file_path} poster={poster}/>)}
        </div>
    );
};

export {Posters}
