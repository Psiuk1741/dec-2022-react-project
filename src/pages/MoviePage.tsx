import React, {FC} from 'react';
import {MovieInfo} from "../components/MovieInfo/MovieInfo";
import {useAppSelector} from "../hooks";
import {Loader} from "../components/Loader/Loader";
import Header from "../components/Header/Header";

const MoviePage: FC = () => {
    return (
        <div>
            <Header/>
            <MovieInfo/>
        </div>
    );
};

export {MoviePage};