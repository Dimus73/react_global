import React, {useState} from 'react';
import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import LagSwitcher from "shared/ui/LangSwitcher/LagSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(prev =>!prev);
    }

    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LagSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
