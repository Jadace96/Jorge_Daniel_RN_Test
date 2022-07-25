import { API } from './../../../../constants/Api';
// services
import { getPokemonById } from '..';

// mocks
import {
	mockFetchError,
	mockFetchSuccess,
} from '../../../../__mocks__/Fetch.mock';
import {
	mockBulbasaurData,
	mockPokemonsDataMapped,
} from '../../../../__mocks__/PokemonDataMocks';

describe('Pokemon service test suit', () => {
	const mockId = 1;
	const expectedUrl = `${API.BASE_HOST}/pokemon/${mockId}`;

	it('should return data on success response', async () => {
		await mockFetchSuccess(mockBulbasaurData);

		const responseData = await getPokemonById(mockId);

		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
		expect(responseData).toEqual(mockPokemonsDataMapped[0]);
	});

	it('should return an error on rejected response', async () => {
		const mockError = 'Error fetching data';

		await mockFetchError(mockError);

		const error = getPokemonById(mockId);

		expect(error).rejects.toEqual(mockError);
		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
	});
});
