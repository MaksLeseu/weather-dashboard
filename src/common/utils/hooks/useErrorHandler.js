import {useState} from "react";
import {ERROR_INPUT_MESSAGE} from "../../constants/error";

export const useErrorHandler = () => {
    const [error, setError] = useState('');

    const validateInput = (input) => {
        const invalidChars = /[^a-zA-Z\s]/;
        if (invalidChars.test(input)) {
            setError(ERROR_INPUT_MESSAGE);
        } else {
            setError('');
        }
    };

    return { error, validateInput }
}