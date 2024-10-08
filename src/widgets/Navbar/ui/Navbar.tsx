import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
            >
                Главная
            </AppLink>
            <AppLink
                to="/about"
                theme={AppLinkTheme.SECONDARY}
            >
                О сайте
            </AppLink>
        </div>
    </div>
);
