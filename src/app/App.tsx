import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss';
// import {AboutPageAsync} from "/pages/AboutPage/AboutPage.async";
// import {MainPageAsync} from "../pages/MainPage/ui/MainPage.async";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/provider/ThermProvider";
import {AppRouter} from "app/provider/router";
import { Navbar } from 'widgets/Navbar';


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2', 'cls3'])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
            Test text
        </div>
    );
};

export default App;