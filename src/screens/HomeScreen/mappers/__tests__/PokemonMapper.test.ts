// mappers
import { pokemonDataMapper } from '..';

// mocks
import {
	mockCharizardData,
	mockPokemonsDataMapped,
} from '../../../../__mocks__/PokemonDataMocks';

describe('pokemonDataMapper test suit', () => {
	it('should return pokemon data mapped', () => {
		const pokemonDataMapped = pokemonDataMapper(mockCharizardData);

		expect(pokemonDataMapped).toEqual(mockPokemonsDataMapped[1]);
	});
});
