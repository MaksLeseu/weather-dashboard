import {useState} from "react";
import {ERROR_MESSAGES} from "../../constants/error";

export const useErrorHandler = () => {
    const [ error, setError ] = useState('');

    const validateInput = (input) => {
        const invalidChars = /[^a-zA-Z\s]/;
        if (invalidChars.test(input)) {
            setError(ERROR_MESSAGES['INPUT']);
        } else {
            setError('');
        }
    };

    return { error, validateInput };
}