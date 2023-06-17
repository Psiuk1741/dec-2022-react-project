import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../redux";
import Header from "../components/Header/Header";
import {Movies} from "../components/Movies/Movies";
import {MoviePagination} from "../components/MoviePagination/MoviePagination";
import {MovieSearch} from "../components/MovieSearch/MovieSearch";

const SearchPage:FC = () => {

    const {queryMovie, page} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    const [query, ] = useSearchParams({page:'1', query:''});


    useEffect(()=>{

        dispatch(movieActions.getSearchMovieByQuery({
            page: +query.get('page'),
            query: query.get('query')
        }))

    },[dispatch, query])
    console.log(query.get('query'), query.get('page'));
    return (
        <div>
            <Header/>
            <MovieSearch/>
        </div>
    );
};

export {SearchPage};