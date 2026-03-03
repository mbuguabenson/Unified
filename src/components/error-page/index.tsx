import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Button from '@/components/shared_ui/button';
import { Localize } from '@deriv-com/translations';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    let errorMessage = 'An unexpected error occurred.';

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText || error.data?.message || errorMessage;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p style={{ color: '#ff4444', marginBottom: '20px' }}>
                <i>{errorMessage}</i>
            </p>
            <Button primary onClick={() => window.location.assign('/')}>
                <Localize i18n_default_text='Go to Dashboard' />
            </Button>
        </div>
    );
};

export default ErrorPage;
