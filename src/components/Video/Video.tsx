import React, {FC} from 'react';
import ReactPlayer from 'react-player';
import {useAppSelector} from "../../hooks";
import css from './Video.module.css'


const Video: FC = () => {
    const {movie} = useAppSelector(state => state.movieReducer);
    return (
        <div className={css.videoBox}>
            {movie?.videos && movie.videos.results.map(video =>
                <div key={video.id} className={css.video}>

                    <ReactPlayer
                        controls={true}
                        url={`https://www.youtube.com/watch?v=${video.key}`}
                    />
                </div>
            )}
        </div>
    );
};

export  {Video};