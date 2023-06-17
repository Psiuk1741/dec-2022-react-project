import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { movieReducer } from "./slices/movieSlice";
import { themeReducer } from "./slices/theme.slice";


const rootReducer = combineReducers({
    movieReducer,
    themeReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
};