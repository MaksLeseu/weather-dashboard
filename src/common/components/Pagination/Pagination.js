import './styles.css';
import {CITIES_PAGE} from "../../constants/common";
import {Button} from "../Button/Button";

export const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
    if (totalPages === CITIES_PAGE['FIRST_PAGE']) {
        return null;
    }

    return (
        <nav className={'pagination_container'}>
            <Button onClick={handlePrevPage} disabled={currentPage === CITIES_PAGE['FIRST_PAGE']}>
                {'<'}
            </Button>
            <span>page {currentPage} of {totalPages}</span>
            <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                {'>'}
            </Button>
        </nav>
    );
};
