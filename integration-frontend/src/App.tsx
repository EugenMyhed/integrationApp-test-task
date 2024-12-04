import React from 'react';
import { IntegrationAppProvider } from '@integration-app/react'
import useToken from "./hooks/useToken";
import IntegrationPage from "./components/integrationPage/IntegrationPage";
import './App.css';

function App() {
    const { token } = useToken();

    return token ? (
        <IntegrationAppProvider token={token}>
            <IntegrationPage token={token}/>
        </IntegrationAppProvider>
    ) : <p>Failed to load token. Please refresh the page.</p>;
}

export default App;
