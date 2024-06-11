import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss';
// import {AboutPageAsync} from "/pages/AboutPage/AboutPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {classNames} from "/helpers/className";
import {useTheme} from "app/provider/ThermProvider";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false},[theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            Test text
        </div>
    );
};

export default App;