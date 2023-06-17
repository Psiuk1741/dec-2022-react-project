import React, { FC } from 'react';
import {ThemeSwitch} from "../components/ThemeSwitch/ThemeSwitch";
import {Movies} from "../components/Movies/Movies";
import {MoviePagination} from "../components/MoviePagination/MoviePagination";

import Header from "../components/Header/Header";

const MainPage:FC = () => {
    return (
        <div>
            <Header/>
            <Movies/>
            <MoviePagination/>
            </div>
    );
};

export {MainPage}