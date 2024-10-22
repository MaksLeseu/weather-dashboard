import './styles.css';
import {CITIES_PAGE} from "../../constants/common";

export const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
    if (totalPages === CITIES_PAGE['FIRST_PAGE']) {
        return;
    }

    return (
        <div className={'pagination_container'}>
            <button onClick={handlePrevPage} disabled={currentPage === CITIES_PAGE['FIRST_PAGE']}>
                {'<'}
            </button>
            <span>page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                {'>'}
            </button>
        </div>
    );
};
