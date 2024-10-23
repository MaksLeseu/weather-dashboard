import { render, screen, fireEvent } from '@testing-library/react';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {FavoriteCitiesContainer} from "./FavoriteCitiesContainer";
import {favoritesCitiesReducer} from "../../store/favoriteCity/favoriteCities.slice";
import '@testing-library/jest-dom';
import {MOCK_CITIES_DATA, MOCK_FIFTEEN_CITIES} from "../../common/constants/tests";

jest.mock('../../store/weatherDashboard/weather.slice', () => ({
    fetchCurrentWeather: jest.fn(),
    fetchFiveDaysWeather: jest.fn(),
}));

const mockStore = (initialState) => configureStore({
    reducer: {
        favoritesCities: favoritesCitiesReducer,
    },
    preloadedState: initialState,
});

describe('FavoriteCitiesContainer', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            favoritesCities: {
                cities: [],
            },
        });
    });

    test('should render null when there are no favorite cities', () => {
        const { container } = render(
            <Provider store={store}>
                <FavoriteCitiesContainer />
            </Provider>
        );

        expect(container).toBeEmptyDOMElement();
    });

    test('should render favorite cities', () => {

        store = mockStore({
            favoritesCities: {
                cities: MOCK_CITIES_DATA,
            },
        });

        render(
            <Provider store={store}>
                <FavoriteCitiesContainer />
            </Provider>
        );

        expect(screen.getByText(/Favorite cities/i)).toBeInTheDocument();
        expect(screen.getByText('City1')).toBeInTheDocument();
        expect(screen.getByText('City2')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /City1/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /City2/i })).toBeInTheDocument();
    });

    test('should handle pagination correctly', () => {
        store = mockStore({
            favoritesCities: {
                cities: MOCK_FIFTEEN_CITIES,
            },
        });

        render(
            <Provider store={store}>
                <FavoriteCitiesContainer />
            </Provider>
        );

        expect(screen.getByText('City1')).toBeInTheDocument();
        expect(screen.getByText('City2')).toBeInTheDocument();

        // Simulate clicking the next button
        fireEvent.click(screen.getByRole('button', { name: />/i }));

        // Check that other cities are rendered (based on your pagination logic)
        expect(screen.getByText('City11')).toBeInTheDocument();
    });
});
