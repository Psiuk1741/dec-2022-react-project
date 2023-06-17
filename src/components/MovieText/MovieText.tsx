import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";

import css from './MovieText.module.css';

const MovieText:FC = () => {
    const {movie} = useAppSelector(state => state.movieReducer);
    return (
        <div className={css.infoBox}>
            <h2>{movie.title}</h2>
            <div className={css.textBox}>
                <div><b>Рейтинг : </b></div>
                <div>{movie?.vote_average} ({movie?.vote_count})</div>
            </div>
            <div className={css.textBox}>
                <div><b>Слоган : </b></div>
                <div>"{movie?.tagline}"</div>
            </div>
            <div className={css.textBox}>
                <div><b>Дата виходу : </b></div>
                <div>{movie?.release_date}</div>
            </div>
            <div className={css.countryBox}>
                <div><b>Країна :</b></div>
                {movie?.production_countries[0] && movie.production_countries.map(country =>
                    <div key={country.name}>{country.name}.</div>)}
            </div>
            <div className={css.countryBox}>
                <div><b>Кінокомпанія : </b></div>
                {movie?.production_companies[0] && movie.production_companies.map(company =>
                    <div key={company.id}>{company.name}.</div>)}
            </div>
            <div className={css.textBox}>
                <div><b>Касові збори :</b></div>
                <div>{new Intl.NumberFormat('en-EN', {
                    style: 'currency',
                    currency: 'USD'
                }).format(movie?.revenue)}</div>
            </div>
            <div className={css.countryBox}>
                <div><b>Жанри : </b></div>
                {movie.genres[0] && movie.genres.map(genre =>
                    <div key={genre.id}>{genre.name}.</div>)}
            </div>
            <div className={css.textBox}>
                <div><b>Режиссер:</b></div>
                {movie?.credits && movie?.credits.crew.map(cre => cre.job === 'Director' ?
                    <div key={cre.name}>{cre.name}</div> : '')}
            </div>
            <div className={css.countryBox}>
                <div><b>Актори : </b></div>
                {movie?.credits && movie?.credits.cast.map(cas =>
                    <div key={cas.order}>{cas.name}.</div>)}
            </div>
        </div>
    );
};

export {MovieText}
