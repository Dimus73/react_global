import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss';
// import {AboutPageAsync} from "/pages/AboutPage/AboutPage.async";
// import {MainPageAsync} from "../pages/MainPage/ui/MainPage.async";
import {classNames} from "../shared/lib/className/className";
import {useTheme} from "app/provider/ThermProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/provider/router";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false},[theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
            Test text
        </div>
    );
};

export default App;