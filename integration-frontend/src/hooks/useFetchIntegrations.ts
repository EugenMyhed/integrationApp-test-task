import { useEffect, useState } from 'react';
import { Connection, Integration, useIntegrationApp } from '@integration-app/react';

const useFetchIntegrations = (token: string | null) => {
    const [integrations, setIntegrations] = useState<Integration[]>([]);
    const [activeConnection, setActiveConnection] = useState<Connection | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const integrationApp = useIntegrationApp();

    useEffect(() => {
        if (!token) {
            setError('No token provided');
            setLoading(false);
            return;
        }
        const fetchIntegrations = async () => {
            try {
                const { items } = await integrationApp.integrations.find();
                setIntegrations(items);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching integrations:', err);
                setError('Failed to fetch integrations');
                setLoading(false);
            }
        };

        fetchIntegrations();
    }, [token, activeConnection]);

    const connectedIntegration = integrations.find((integration) => {
        return activeConnection ? integration.name === activeConnection.name : false;
    });

    return {
        integrations,
        activeConnection,
        setActiveConnection,
        connectedIntegration,
        loading,
        error,
    };
};

export default useFetchIntegrations;
