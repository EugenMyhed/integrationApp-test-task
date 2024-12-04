import React from 'react';
import { IntegrationListContainer } from './styles';
import IntegrationTile from './IntegrationTile';
import { Connection, Integration } from '@integration-app/react';

interface IntegrationsListProps {
    integrations: Integration[];
    error: string | null;
    loading: boolean;
    activeConnection: Connection | null;
    connectedIntegration?: Integration;
    setActiveConnection: (connection: Connection | null) => void;
}

const IntegrationsList: React.FC<IntegrationsListProps> = ({
    integrations,
    error,
    loading,
    activeConnection,
    connectedIntegration,
    setActiveConnection
}) => {
    if (error) return <p>{error}</p>;

    return !loading ? (
        <IntegrationListContainer>
            {integrations.map((integration) => (
                <IntegrationTile
                    integrationKey={integration.key}
                    activeConnection={activeConnection}
                    setActiveConnection={setActiveConnection}
                    connectedIntegration={connectedIntegration}
                    {...integration}
                    key={integration.key}
                />
            ))}
        </IntegrationListContainer>
    ) : <p>Loading integrations...</p>;
};

export default IntegrationsList;
