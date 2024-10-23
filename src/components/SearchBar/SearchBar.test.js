import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './SearchBar';
import { citiesThunk } from '../../store/citiesThunk/cities.thunk';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('../../store/citiesThunk/cities.thunk', () => ({
    citiesThunk: {
        fetchCityDetails: jest.fn(),
    },
}));

describe('SearchBar Component', () => {
    let dispatchMock;

    beforeEach(() => {
        dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render input and button', () => {
        render(<SearchBar />);

        expect(screen.getByPlaceholderText(/enter city/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    });

    test('should update input value when typing', () => {
        render(<SearchBar />);

        const input = screen.getByPlaceholderText(/enter city/i);

        fireEvent.change(input, { target: { value: 'New York' } });

        expect(input).toHaveValue('New York');
    });

    test('should dispatch fetchCityDetails when clicking Send button', () => {
        render(<SearchBar />);

        const input = screen.getByPlaceholderText(/enter city/i);
        const button = screen.getByRole('button', { name: /send/i });

        fireEvent.change(input, { target: { value: 'New York' } });

        fireEvent.click(button);

        expect(dispatchMock).toHaveBeenCalledWith(citiesThunk.fetchCityDetails('New York'));
        expect(input).toHaveValue('');
    });

    test('should not dispatch action when input is empty', () => {
        render(<SearchBar />);

        const button = screen.getByRole('button', { name: /send/i });

        fireEvent.click(button);
        expect(dispatchMock).not.toHaveBeenCalled();
    });
});
