// utils
import { getFilteredValuesByName } from '../../../utils';

// types
import { PokemonDataMappedTypes } from '../types';

export const getPokemonListData = (
	searchInputValue: string,
	paginatedPokemons: Array<PokemonDataMappedTypes>,
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
