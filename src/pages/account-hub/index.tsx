import React from 'react';
import PageContentWrapper from '@/components/page-content-wrapper';

const AccountHub = () => {
    return (
        <PageContentWrapper>
            <div style={{ height: 'calc(100vh - 120px)', width: '100%', overflow: 'hidden' }}>
                <iframe
                    src='/dtool/account'
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title='Account Hub'
                />
            </div>
        </PageContentWrapper>
    );
};

export default AccountHub;
