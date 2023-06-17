import React, {FC} from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import {IMovie} from "../../interfaces";
import {imagesUrl} from "../../constans";
import empty from "../../images/empty.png";

interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {id, title, vote_average, poster_path} = movie;

    return (
        <div>
            <div className={'movie_card'}>
                {/*{moviesByGenre &&(*/}

                <Link to={`/movie/${id}`}>
                    <div>
                        {movie.poster_path ?
                            <img className={'movie_image'} src={imagesUrl+`${poster_path}`}
                                 alt={'Movie poster'}

                            /> :
                            <img className={'movie_image'}
                                 src={`https://www.prokerala.com/movies/assets/img/no-poster-available.webp`}
                                 alt={'Movie poster'}

                            />}
                    </div>


                    <div>
                        <p style={{fontWeight:'bolder', color:'whitesmoke'}}>{title}</p>
                    </div>

                    <div>

                        <StarRatings
                            rating={vote_average} // Оцінка фільму
                            starRatedColor="yellow" // Колір заповнених зірочок
                            starEmptyColor="gray" // Колір порожніх зірочок
                            numberOfStars={10} // Кількість зірочок
                            starDimension="20px" // Розмір зірочок
                            starSpacing="2px" // Відстань між зірочками

                        />

                    </div>

                </Link>


            </div>
        </div>
    );
};

export {Movie};