// vendors
import { useState, useEffect } from 'react';

// utils
import { getRange } from '../../../utils';

// services
import { getPokemonByQuery } from '../services';

// types
import { PokemonDataMappedTypes } from '../types';

export const usePaginatedPokemons = () => {
	const [isPaginatedPokemonsSuccess, setIsPaginatedPokemonsSuccess] =
		useState(false);
	const [isPaginatedPokemonsError, setIsPaginatedPokemonsError] =
		useState(false);
	const [isLoadingPaginatedPokemons, setIsLoadingPaginatedPokemons] =
		useState(false);
	const [paginatedPokemons, setPaginatedPokemons] = useState<
		Array<PokemonDataMappedTypes>
	>([]);

	const onFetchPaginatedPokemonsSuccess = (
		data: Array<PokemonDataMappedTypes>,
	) => {
		const updatedPokemonsData = [...paginatedPokemons, ...data];
		setPaginatedPokemons(updatedPokemonsData);
		setIsPaginatedPokemonsSuccess(true);
	};

	const getPaginatedPokemons = async () => {
		setIsPaginatedPokemonsError(false);
		setIsLoadingPaginatedPokemons(true);

		const promisesArray = getRange(paginatedPokemons?.length).map(pokemonId =>
			getPokemonByQuery(pokemonId + 1),
		);

		await Promise.all(promisesArray)
			.then(onFetchPaginatedPokemonsSuccess)
			.catch((error: any) => setIsPaginatedPokemonsError(error))
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
