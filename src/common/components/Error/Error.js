import {useEffect, useState} from "react";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {setAppError} from "../../../app/app.slice";
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
            <div>
                {error}
            </div>
        </ModalWindow>
    );
};