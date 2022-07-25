// utils
import { getPokemonListData } from '..';

// mocks
import { mockPokemonsDataMapped } from '../../../../__mocks__/PokemonDataMocks';

describe('Home screen utils tests suit', () => {
	it('should return paginated pokemons', () => {
		const pokemonListData = getPokemonListData('', mockPokemonsDataMapped);

		expect(pokemonListData).toEqual(mockPokemonsDataMapped);
	});

	it('should return pokemon with names matching "cha"', () => {
		const filteredPokemons = getPokemonListData('cha', mockPokemonsDataMapped);

		expect(filteredPokemons).toEqual([mockPokemonsDataMapped[1]]);
	});
});
