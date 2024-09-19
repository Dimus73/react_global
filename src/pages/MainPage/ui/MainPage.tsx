import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/provider/ErrorBoundaruy';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
