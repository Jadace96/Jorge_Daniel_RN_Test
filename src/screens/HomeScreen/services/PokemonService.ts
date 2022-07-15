// constants
import { API } from './../../../constants';

// mappers
import { pokemonDataMapper } from '../mappers';

export const getPokemonByQuery = async (query: number | string) => {
	const response = await fetch(`${API.BASE_HOST}/pokemon/${query}`);
	const data = await response.json();

	return pokemonDataMapper(data);
};
