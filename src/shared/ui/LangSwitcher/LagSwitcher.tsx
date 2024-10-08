import { useTranslation } from 'react-i18next';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LagSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

const LagSwitcher = ({ className }:LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t('Язык')}
            </Button>
        </div>
    );
};

export default LagSwitcher;
