import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = ({
    className, children, theme = AppLinkTheme.PRIMARY, to, ...props
}) => (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...props}>
        {children}
    </Link>
);

export default AppLink;
