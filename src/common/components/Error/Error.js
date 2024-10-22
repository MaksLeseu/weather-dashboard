import {useEffect, useState} from "react";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {setAppError} from "../../../store/app/app.slice";
import {useDispatch} from "react-redux";

export const Error = ({ error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            setIsOpen(true);
        }
    }, [error]);

    const handleClose = () => {
        setIsOpen(false);
        dispatch(setAppError({ error: null }));
    };

    return (
        <ModalWindow isOpen={isOpen} onClose={handleClose}>
            <article>
                <header>
                    <h2 id={'error-title'}>Error</h2>
                </header>
                <p>{error}</p>
            </article>
        </ModalWindow>
    );
};