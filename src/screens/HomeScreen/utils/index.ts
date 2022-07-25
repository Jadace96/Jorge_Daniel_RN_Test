// utils
import { getFilteredValues } from '../../../utils';

// types
import { PokemonDataMapped } from '../../../types';

export const getPokemonListData = (
	searchInputValue: string,
	paginatedPokemons: Array<PokemonDataMapped>,
) => {
	if (searchInputValue === '') return paginatedPokemons;

	const filteredPokemonsByName = getFilteredValues({
		data: paginatedPokemons,
		valueToFilter: searchInputValue,
	});

	return filteredPokemonsByName;
};
