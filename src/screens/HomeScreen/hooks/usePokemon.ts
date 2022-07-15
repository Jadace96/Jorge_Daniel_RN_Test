import { useState, useEffect } from 'react';

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
		setIsSuccess(true);
		setPokemonsData(data);
	};

	const getPokemons = async (offset = 0, limit = 20) => {
		setIsError(false);
		setIsFetching(true);

		const pokemonAmount = offset + limit;
		const promisesArray = [...Array(pokemonAmount).keys()].map(pokemonId =>
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
