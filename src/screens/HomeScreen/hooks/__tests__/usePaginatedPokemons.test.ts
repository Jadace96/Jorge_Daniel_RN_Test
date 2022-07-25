// vendor
import { renderHook } from '@testing-library/react-hooks';

// utils
import * as utils from '../../../../utils';

// services
import * as PokemonServices from '../../services/PokemonService';

// hooks
import { usePaginatedPokemons } from '..';

// mocks
import {
	mockCharizardData,
	mockPokemonsDataMapped,
} from '../../../../__mocks__/PokemonDataMocks';
import { mockFetchSuccess } from './../../../../__mocks__/Fetch.mock';

const mockGetRange = () =>
	jest.spyOn(utils, 'getRange').mockImplementation(() => [1, 6]);

const mockGetPokemonById = (isSuccess = true) => {
	jest
		.spyOn(PokemonServices, 'getPokemonById')
		.mockImplementation((pokemonId: number): any =>
			isSuccess
				? Promise.resolve(
						mockPokemonsDataMapped.find(pokemon => pokemon.id === pokemonId),
				  )
				: Promise.reject(new Error('Error fetching data')),
		);
};

describe('usePaginatedPokemons custom hook test suit', () => {
	it('should trigger fetch 20 times on service success', async () => {
		mockFetchSuccess(mockCharizardData);
		const { result, waitForNextUpdate } = renderHook(() =>
			usePaginatedPokemons(),
		);

		expect(result.current.paginatedPokemons).toEqual([]);
		expect(result.current.isPaginatedPokemonsError).toEqual(false);
		expect(result.current.isLoadingPaginatedPokemons).toEqual(true);
		expect(result.current.isPaginatedPokemonsSuccess).toEqual(false);

		await waitForNextUpdate();

		expect(global.fetch).toHaveBeenCalledTimes(20);
		expect(result.current.paginatedPokemons).toHaveLength(20);
		expect(result.current.isPaginatedPokemonsError).toEqual(false);
		expect(result.current.isPaginatedPokemonsSuccess).toEqual(true);
		expect(result.current.isLoadingPaginatedPokemons).toEqual(false);
	});

	it('should update hook data correctly on service success', async () => {
		mockGetRange();
		mockGetPokemonById(true);

		const { result, waitForNextUpdate } = renderHook(() =>
			usePaginatedPokemons(),
		);

		expect(result.current.paginatedPokemons).toEqual([]);
		expect(result.current.isPaginatedPokemonsError).toEqual(false);
		expect(result.current.isLoadingPaginatedPokemons).toEqual(true);
		expect(result.current.isPaginatedPokemonsSuccess).toEqual(false);

		await waitForNextUpdate();

		expect(result.current.isPaginatedPokemonsError).toEqual(false);
		expect(result.current.isPaginatedPokemonsSuccess).toEqual(true);
		expect(result.current.isLoadingPaginatedPokemons).toEqual(false);
		expect(result.current.paginatedPokemons).toEqual(mockPokemonsDataMapped);
	});

	it('should update hook data correctly on service fails', async () => {
		mockGetPokemonById(false);

		const { result, waitForNextUpdate } = renderHook(() =>
			usePaginatedPokemons(),
		);

		expect(result.current.paginatedPokemons).toEqual([]);
		expect(result.current.isPaginatedPokemonsError).toEqual(false);
		expect(result.current.isLoadingPaginatedPokemons).toEqual(true);
		expect(result.current.isPaginatedPokemonsSuccess).toEqual(false);

		await waitForNextUpdate();

		expect(result.current.paginatedPokemons).toEqual([]);
		expect(result.current.isPaginatedPokemonsError).toEqual(true);
		expect(result.current.isPaginatedPokemonsSuccess).toEqual(false);
		expect(result.current.isLoadingPaginatedPokemons).toEqual(false);
	});
});
