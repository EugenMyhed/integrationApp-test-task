import React, { FC } from 'react';
import IntegrationsList from '../integrationList/IntegrationsList';
import CreateContactForm from '../CreateContactForm/CreateContactForm';
import useFetchIntegrations from '../../hooks/useFetchIntegrations';

type IntegrationPageProps = {
    token: string | null;
};

const IntegrationPage: FC<IntegrationPageProps> = ({ token }) => {
    const {
        integrations,
        activeConnection,
        setActiveConnection,
        connectedIntegration,
        loading,
        error,
    } = useFetchIntegrations(token);

    return (
        <div>
            <IntegrationsList
                integrations={integrations}
                error={error}
                loading={loading}
                activeConnection={activeConnection}
                connectedIntegration={connectedIntegration}
                setActiveConnection={setActiveConnection}
            />
            {activeConnection && <CreateContactForm connectedIntegration={connectedIntegration}/>}
        </div>
    );
}

export default IntegrationPage;
