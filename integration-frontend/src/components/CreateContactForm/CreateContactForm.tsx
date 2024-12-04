import React, { FC } from 'react';
import { Integration } from '@integration-app/react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Link,
    Alert,
    CircularProgress,
} from '@mui/material';
import useCreateContact from '../../hooks/useCreateContact';

type CreateContactFormProps = {
    connectedIntegration?: Integration;
};

const CreateContactForm: FC<CreateContactFormProps> = ({ connectedIntegration }) => {
    const {
        formData,
        handleChange,
        handleSubmit,
        loading,
        error,
        responseLink,
    } = useCreateContact(connectedIntegration);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <Box
            sx={{
                maxWidth: 600,
                mx: 'auto',
                mt: 4,
                p: 3,
                boxShadow: 2,
                borderRadius: 2,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Typography variant='h4' gutterBottom>
                Create Contact
            </Typography>
            <form onSubmit={onSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        fullWidth
                        label='Full Name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        variant='outlined'
                        required
                    />
                    <TextField
                        fullWidth
                        type='email'
                        label='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        variant='outlined'
                        required
                    />
                    <TextField
                        fullWidth
                        label='Phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        variant='outlined'
                    />
                    <TextField
                        fullWidth
                        label='Company Name'
                        name='companyName'
                        value={formData.companyName}
                        onChange={handleChange}
                        variant='outlined'
                    />
                    <TextField
                        fullWidth
                        label='Pronouns'
                        name='pronouns'
                        value={formData.pronouns}
                        onChange={handleChange}
                        variant='outlined'
                    />
                </Box>
                <Box sx={{ mt: 3, position: 'relative' }}>
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        fullWidth
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Create Contact'}
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
            </form>
            {responseLink && (
                <Box sx={{ mt: 2 }}>
                    <Alert severity='success'>
                        Contact created! View it{' '}
                        <Link href={responseLink} target='_blank' rel='noopener'>
                            here
                        </Link>.
                    </Alert>
                </Box>
            )}
            {error && (
                <Box sx={{ mt: 2 }}>
                    <Alert severity='error'>{error}</Alert>
                </Box>
            )}
        </Box>
    );
};

export default CreateContactForm;
