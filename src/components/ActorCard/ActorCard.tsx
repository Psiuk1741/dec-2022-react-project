import React, {FC} from 'react';
import {IActor, IMovie} from "../../interfaces";
import {imagesUrl} from "../../constans";
import css from './ActorCard.module.css'

interface IProps{
    actor:IActor
}
const ActorCard:FC<IProps> = ({actor}) => {

    return (
        <div className={css.actorCard}>
            <div  className={css.cardBox}>
                <div>
                    {actor.profile_path ?
                        <img loading={"lazy"} src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                             alt={'Movie poster'}
                        /> :
                        <img className={css.noPoster}
                             src={`https://www.prokerala.com/movies/assets/img/no-poster-available.webp`}
                             alt={'Movie poster'}
                        />}
                </div>
                <div>
                    <div><b>{actor?.name}</b></div>
                    <div>В ролі : {actor?.character}</div>
                </div>
            </div>
        </div>
    );
};

export  {ActorCard};