import {useState} from "react";

export const useErrorHandler = () => {
    const [error, setError] = useState('');

    const validateInput = (input) => {
        const invalidChars = /[^a-zA-Z\s]/;
        if (invalidChars.test(input)) {
            setError('you can only enter latin letters');
        } else {
            setError('');
        }
    };

    return { error, validateInput }
}