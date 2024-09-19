import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const [err, setErr] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setErr(true);

    useEffect(() => {
        if (err) {
            throw new Error();
        }
    }, [err]);

    return (
        <Button onClick={onThrow}>
            {t('Вызвать ошибку')}
        </Button>
    );
};
