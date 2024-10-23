export const MOCK_CITIES_DATA = [
    { name: 'City1', coord: { lat: 1, lon: 1 } },
    { name: 'City2', coord: { lat: 2, lon: 2 } },
];

export const MOCK_FIFTEEN_CITIES = Array.from({ length: 15 }, (_, i) => ({
    name: `City${i + 1}`,
    coord: { lat: i, lon: i },
}));