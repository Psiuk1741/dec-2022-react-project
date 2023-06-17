import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import './MoviePagination.css'

const MoviePagination:FC = () => {
    const {page, totalPages} = useAppSelector(state => state.movieReducer);
    const {lightMode} = useAppSelector(state => state.themeReducer);
    const [query,setQuery] = useSearchParams();

    const prev = () =>{
        setQuery(prev =>({...prev, page:+prev.get('page')-1}) )
    }

    const next = () =>{
        setQuery(prev =>({...prev, page:+prev.get('page')+1}) )
    }

    const changePageByNumber=(num:number) =>{
        setQuery(prev =>({...prev, page:`${page + num}`}))
    }

    const changePageToFirstOrLast=(num:number) =>{
        setQuery(prev =>({...prev, page:`${num}`}))
    }



    return (
        <div className='wrap-pagination'>
            {page>1 && <button className={lightMode?'btn-pagination-light':'btn-pagination-dark'} disabled={(page===1)} onClick={prev}>&lt;&lt;Prev</button>}
            <button className={lightMode?'btn-pagination-light':'btn-pagination-dark'} onClick={()=>changePageToFirstOrLast(1)}>{1}</button>
            {page>2 && <button className={lightMode?'btn-pagination-light':'btn-pagination-dark'} onClick={()=>changePageByNumber(-1)}>{page-1}</button>}
            {page>2&&<button className={`${lightMode?'btn-pagination-light':'btn-pagination-dark'} btn-pagination-now`} onClick={()=>changePageByNumber(0)}>{page+0}</button>}
            {page<500 && <button className={lightMode?'btn-pagination-light':'btn-pagination-dark'} onClick={()=>changePageByNumber(1)}>{page+1}</button>}
            {page<500 && <button className={lightMode?'btn-pagination-light':'btn-pagination-dark'} onClick={()=>changePageToFirstOrLast(500)}>{500}</button>}
            {page<500 && <button className={lightMode?'btn-pagination-light':'btn-pagination-dark'} disabled={(page===500)} onClick={next}>Next&gt;&gt;</button>}
        </div>
    );
};

export  {MoviePagination};