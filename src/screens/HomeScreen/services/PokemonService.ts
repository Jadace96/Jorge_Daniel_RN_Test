// constants
import { API } from './../../../constants';

// mappers
import { pokemonDataMapper } from '../mappers';

export const getPokemonById = async (pokemonId: number) => {
	const response = await fetch(`${API.BASE_HOST}/pokemon/${pokemonId}`);
	const data = await response.json();

	return pokemonDataMapper(data);
};
