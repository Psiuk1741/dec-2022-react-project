import React from 'react';
import  './App.css';
import {createBrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {useAppSelector} from "./hooks";
import {MainPage, MoviePage} from "./pages";
import { SearchPage } from './pages/SearchPage';



function App() {


    return (
      <div>
   <Routes>
       <Route path={'/'} element={<MainLayout/>}></Route>
       <Route index element={<Navigate to={'main'}/>}/>
       <Route path={'main'} element={<MainPage/>}></Route>
       <Route path={'movie/:id'} element={<MoviePage/>}></Route>
       <Route path={'search'} element={<SearchPage/>}/>
   </Routes>
      </div>
  );

}

export default App;
