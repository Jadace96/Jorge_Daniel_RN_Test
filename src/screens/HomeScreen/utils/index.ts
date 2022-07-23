// utils
import { getFilteredValuesByName } from '../../../utils';

// types
import { PokemonDataMapped } from '../types';

export const getPokemonListData = (
	searchInputValue: string,
	paginatedPokemons: Array<PokemonDataMapped>,
) => {
	if (searchInputValue?.length > 0) {
		const filteredPokemonsByName = getFilteredValuesByName(
			paginatedPokemons,
			searchInputValue,
		);

		return filteredPokemonsByName;
	}

	return paginatedPokemons;
};
