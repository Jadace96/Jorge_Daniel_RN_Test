// vendor
import { renderHook } from '@testing-library/react-hooks';

// services
import * as PokemonServices from '../../services/PokemonService';

// hooks
import { usePaginatedPokemons } from '..';

// mocks
import { mockPokemonsDataMapped } from '../../../../__mocks__/PokemonDataMocks';

jest.mock('../../../../utils', () => ({
	...jest.requireActual('./../../../../utils'),
	getRange: () => [1, 6],
}));

describe('usePaginatedPokemons custom hook test suit', () => {
	it('should update hook data on service success', async () => {
		jest
			.spyOn(PokemonServices, 'getPokemonById')
			.mockImplementation((pokemonId: number): any =>
				Promise.resolve(
					mockPokemonsDataMapped.find(pokemon => pokemon.id === pokemonId),
				),
			);

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

	it('should update hook data on service fails', async () => {
		jest
			.spyOn(PokemonServices, 'getPokemonById')
			.mockImplementation(() =>
				Promise.reject(new Error('Error fetching data')),
			);

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
