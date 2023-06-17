import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";

import css from './SearchFilms.module.css'

const SearchFilms:FC = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, reset, watch} = useForm({mode: 'all'})
    const inputValue = watch('search', '');

    const dispatch = useAppDispatch();

    const search = (data:string) => {


        dispatch(movieActions.setQuery(data.search));


        navigate(`/search?page=1&query=${data.search}`);

        reset();
    }


    return (
        <div className={css.searchBox}>
            <form onSubmit={handleSubmit(search)}>
                <div>
                    <input type={"text"} placeholder={'назва'} {...register('search')}/>
                </div>

                <div>
                    <button disabled={!inputValue}>Пошук</button>
                </div>
            </form>
        </div>
    );
};

export {SearchFilms};