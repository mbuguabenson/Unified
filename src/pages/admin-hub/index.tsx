import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContentWrapper from '@/components/page-content-wrapper';
import Tabs from '@/components/shared_ui/tabs/tabs';
import { Localize } from '@deriv-com/translations';
import AdminDashboard from '../admin/dashboard';

const AdminHub = () => {
    const navigate = useNavigate();

    return (
        <PageContentWrapper>
            <div className='admin-hub'>
                <Tabs
                    top
                    history={{ location: window.location, replace: (path: string) => navigate(path, { replace: true }) } as any}
                    should_update_hash
                >
                    <div label={<Localize i18n_default_text='Core Analytics' />} hash='core'>
                        <AdminDashboard />
                    </div>
                    <div label={<Localize i18n_default_text='Live Platform' />} hash='live'>
                        <div style={{ height: 'calc(100vh - 180px)', width: '100%', overflow: 'hidden' }}>
                            <iframe
                                src='/dtool/admin'
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title='Live Platform Admin'
                            />
                        </div>
                    </div>
                </Tabs>
            </div>
        </PageContentWrapper>
    );
};

export default AdminHub;
