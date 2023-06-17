import {createSlice} from "@reduxjs/toolkit";

interface ITheme{
    lightMode: boolean
}

const initialState = {
    lightMode: false
}

const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state)=>{
            state.lightMode = !state.lightMode;
        }
    }
});

const {actions, reducer:themeReducer} = slice;

const themeActions = {
    ...actions,
}

export {
    themeReducer,
    themeActions
}

export type {ITheme}