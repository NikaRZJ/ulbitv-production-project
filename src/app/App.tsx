import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls2', 'cls3'])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
