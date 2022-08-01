import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const register = async (username, email, password) => {
        setIsLoading(true);
        setError(null);

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, email, password })
        }
        const response = await fetch('http://localhost:3000/user/register', options);
        const respJson = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(respJson.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(respJson));
            dispatch({type: 'LOGIN', payload: respJson})
            setIsLoading(false);
        }
    }

    return { register, isLoading, error }
}
