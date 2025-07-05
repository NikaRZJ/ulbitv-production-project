import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({
    className, children, theme, ...props
}) => (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...props}>
        {children}
    </button>
);

export default Button;
