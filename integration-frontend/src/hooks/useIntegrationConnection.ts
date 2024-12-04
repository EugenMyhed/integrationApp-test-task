import { useEffect } from 'react';
import { Connection, Integration, useIntegrationApp } from '@integration-app/react';
import { isEqual } from 'lodash';

interface UseIntegrationConnectionProps {
    integrationKey: string;
    activeConnection: Connection | null;
    setActiveConnection: (connection: Connection | null) => void;
    connection?: Connection;
    connectedIntegration?: Integration;
}

const useIntegrationConnection = ({
    integrationKey,
    activeConnection,
    setActiveConnection,
    connection,
    connectedIntegration,
}: UseIntegrationConnectionProps) => {
    const integrationApp = useIntegrationApp();

    useEffect(() => {
        if (connection) {
            setActiveConnection(connection);
        }
    }, [setActiveConnection]);

    const handleConnectIntegration = async () => {
        try {
            if (activeConnection && connectedIntegration) {
                await integrationApp.integration(connectedIntegration.key).disconnect();
            }
            const newConnection = await integrationApp
                .integration(integrationKey)
                .openNewConnection();
            setActiveConnection(newConnection);
        } catch (err) {
            console.error('Error connecting integration:', err);
        }
    };

    const handleDisconnectIntegration = async () => {
        try {
            await integrationApp.integration(integrationKey).disconnect();
            setActiveConnection(null);
        } catch (err) {
            console.error('Error disconnecting integration:', err);
        }
    };

    const isConnected = isEqual(connection, activeConnection);
    const connectionHandler = isConnected
        ? handleDisconnectIntegration
        : handleConnectIntegration;

    return {
        isConnected,
        connectionHandler,
    };
};

export default useIntegrationConnection;
