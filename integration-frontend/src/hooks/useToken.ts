import { useState, useEffect } from 'react';
import axios from 'axios';

const useToken = () => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get('http://localhost:3001/api/get-token')
            .then((response) => {
                setToken(response.data.token);
            })
            .catch((error) => {
                console.error('Error fetching token:', error);
            });
    }, []);

    return { token };
};

export default useToken;
