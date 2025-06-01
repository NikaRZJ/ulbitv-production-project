import { classNames } from "shared/lib/classNames/classNames";
import { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import './styles/index.scss';
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false}, [theme, 'cls2', 'cls3'])}> 
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Главная</Link> 
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    ); 
};

export default App;