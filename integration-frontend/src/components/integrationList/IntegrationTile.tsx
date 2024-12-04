import React, { FC } from 'react';
import { Connection, Integration } from "@integration-app/react";
import { IntegrationImg, StyledButton, Tile } from "./styles";
import useIntegrationConnection from "../../hooks/useIntegrationConnection";

interface IntegrationTileProps extends Integration {
    integrationKey: string;
    activeConnection: Connection | null;
    connectedIntegration?: Integration;
    setActiveConnection: (connection: Connection | null) => void;
}

const IntegrationTile: FC<IntegrationTileProps> =  ({
    name,
    logoUri,
    integrationKey,
    connection,
    activeConnection,
    connectedIntegration,
    setActiveConnection
}) => {
    const { isConnected, connectionHandler } = useIntegrationConnection({
        integrationKey,
        activeConnection,
        setActiveConnection,
        connection,
        connectedIntegration,
    });

    return (
        <Tile>
            <IntegrationImg src={logoUri} alt={name}/>
            <span>{name}</span>
            <StyledButton
                onClick={connectionHandler}
                variant='outlined'
                color={isConnected ? 'error' : 'primary'}
            >
                {!isConnected ? 'Connect' : 'Disconnect'}
            </StyledButton>
        </Tile>
    );
}

export default IntegrationTile;