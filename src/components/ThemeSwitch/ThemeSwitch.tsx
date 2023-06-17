import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux";

const ThemeSwitch: FC = () => {

    const {lightMode} = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();

    return (
        <div>
            <button
                className={'toggle_theme'}
                onClick={() => dispatch(themeActions.toggleTheme())}
            >
                {lightMode ? 'Dark' : 'Light'}
            </button>
        </div>
    );
};

export {ThemeSwitch};