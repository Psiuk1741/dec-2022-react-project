import React from 'react';
import './Header.css';

import User_Photo from '../../images/user.png'
import Logo from '../../images/logo2.jpg'

import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";
import {useAppSelector} from "../../hooks";
import {SearchFilms} from "../SearchFilms/SearchFilms";


const Header: React.FC = () => {
    const {lightMode} = useAppSelector(state => state.themeReducer);
    return (
        <header className={lightMode ? "header_light" : "header_dark"}>


            <div className="header__siteName"><img src={Logo} alt="Фото користувача" className="header__logoPhoto"/>
            </div>

            <SearchFilms/>

            <ThemeSwitch/>
            <div className="header__user">
                <div className="header__userName">user228</div>
                <img src={User_Photo} alt="Фото користувача" className="header__userPhoto"/>
            </div>
        </header>
    );
}

export default Header;
