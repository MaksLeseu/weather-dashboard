import {useState} from "react";
import {ERROR_MESSAGES} from "../../constants/error";

export const useErrorHandler = () => {
    const [ error, setError ] = useState('');

    // Function for input validation.
    const validateInput = (input) => {
        const invalidChars = /[^a-zA-Z\s]/;

        // If the input contains invalid characters, set an error message
        if (invalidChars.test(input)) {
            setError(ERROR_MESSAGES['INPUT']);
        } else {
            setError('');
        }
    };

    return { error, validateInput };
}