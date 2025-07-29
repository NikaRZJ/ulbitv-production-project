import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary

const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('throw error')}
        </Button>
    );
};

export default BugButton;
