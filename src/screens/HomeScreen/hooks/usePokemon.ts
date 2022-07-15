// vendors
import { useState, useEffect } from 'react';

// utils
import { getRange } from '../../../utils';

// services
import { getPokemonById } from '../services';

// types
import { PokemonDataMappedTypes } from '../types';

export const usePokemon = () => {
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const [pokemonsData, setPokemonsData] = useState<
		Array<PokemonDataMappedTypes>
	>([]);

	const onFetchPokemonsDataSuccess = (data: Array<PokemonDataMappedTypes>) => {
		const updatedPokemonsData = [...pokemonsData, ...data];
		setIsSuccess(true);
		setPokemonsData(updatedPokemonsData);
	};

	const getPokemons = async () => {
		setIsError(false);
		setIsFetching(true);

		const promisesArray = getRange(pokemonsData?.length).map(pokemonId =>
			getPokemonById(pokemonId + 1),
		);

		await Promise.all(promisesArray)
			.then(onFetchPokemonsDataSuccess)
			.catch((error: any) => setIsError(error))
			.finally(() => setIsFetching(false));
	};

	useEffect(() => {
		getPokemons();
	}, []);

	return {
		isError,
		isSuccess,
		isFetching,
		getPokemons,
		pokemonsData,
	};
};
