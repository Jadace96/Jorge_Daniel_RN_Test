// constants
import { API } from './../../../constants';

// mappers
import { pokemonDataMapper } from '../mappers';

export const getPokemonById = async (id: number) => {
	const response = await fetch(`${API.BASE_HOST}/pokemon/${id}`);
	const data = await response.json();

	return pokemonDataMapper(data);
};
