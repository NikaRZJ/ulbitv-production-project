import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import './styles/index.scss';
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false}, [theme, 'cls2', 'cls3'])}> 
            <Navbar />
            <AppRouter />
        </div>
    ); 
};

export default App;