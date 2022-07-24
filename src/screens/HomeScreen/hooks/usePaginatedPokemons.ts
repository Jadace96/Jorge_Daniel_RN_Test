// vendors
import { useState, useEffect } from 'react';

// utils
import { getRange } from '../../../utils';

// services
import { getPokemonById } from '../services';

// types
import { PokemonDataMapped } from '../types';

export const usePaginatedPokemons = () => {
	const [isPaginatedPokemonsSuccess, setIsPaginatedPokemonsSuccess] =
		useState(false);
	const [isPaginatedPokemonsError, setIsPaginatedPokemonsError] =
		useState(false);
	const [isLoadingPaginatedPokemons, setIsLoadingPaginatedPokemons] =
		useState(false);
	const [paginatedPokemons, setPaginatedPokemons] = useState<
		Array<PokemonDataMapped>
	>([]);

	const onFetchPaginatedPokemonsSuccess = (data: Array<PokemonDataMapped>) => {
		const updatedPokemonsData = [...paginatedPokemons, ...data];

		setPaginatedPokemons(updatedPokemonsData);
		setIsPaginatedPokemonsSuccess(true);
	};

	const getPaginatedPokemons = async () => {
		setIsPaginatedPokemonsError(false);
		setIsLoadingPaginatedPokemons(true);

		const pokemonsId = getRange(paginatedPokemons?.length + 1);
		const promisesArray = pokemonsId.map(getPokemonById);

		await Promise.all(promisesArray)
			.then(onFetchPaginatedPokemonsSuccess)
			.catch(() => setIsPaginatedPokemonsError(true))
			.finally(() => setIsLoadingPaginatedPokemons(false));
	};

	useEffect(() => {
		getPaginatedPokemons();
	}, []);

	return {
		paginatedPokemons,
		getPaginatedPokemons,
		isPaginatedPokemonsError,
		isLoadingPaginatedPokemons,
		isPaginatedPokemonsSuccess,
	};
};
