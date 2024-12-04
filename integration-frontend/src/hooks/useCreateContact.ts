import { useState } from 'react';
import { Integration, useIntegrationApp } from '@integration-app/react';

const DEFAULT_FORM_DATA = {
    name: '',
    email: '',
    phone: '',
    companyName: '',
    pronouns: '',
};

interface FormData {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    pronouns: string;
}

const useCreateContact = (connectedIntegration: Integration | undefined) => {
    const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [responseLink, setResponseLink] = useState<string | null>(null);

    const integrationApp = useIntegrationApp();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        setResponseLink(null);

        try {
            if (connectedIntegration) {
                const response = await integrationApp
                    .connection(connectedIntegration?.key)
                    .action('create-contact')
                    .run(formData)

                const contactUrl = await integrationApp
                    .connection(connectedIntegration?.key)
                    .action('find-contact-by-id')
                    .run({
                        'id': response?.output?.id
                    })
                setResponseLink(
                    contactUrl?.output?.uri
                );
            }
        } catch (err: any) {
            console.error('Error creating contact:', err);
            setError(
                err.response?.data?.message || 'Failed to create contact. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        loading,
        error,
        responseLink,
    };
};

export default useCreateContact;
