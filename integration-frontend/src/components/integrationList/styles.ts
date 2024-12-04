import { Button, styled } from "@mui/material";

export const IntegrationListContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: theme.spacing(3),
}));

export const Tile = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#e8e8e8',
    cursor: 'pointer',
}));

export const IntegrationImg = styled('img')(({ theme }) => ({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: theme.spacing(1),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    height: 24,
    marginLeft: theme.spacing(1),
    fontSize: 12,

}));