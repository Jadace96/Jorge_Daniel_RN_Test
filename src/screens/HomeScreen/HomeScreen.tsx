// vendors
import React, { useMemo, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

// utils
import { getPokemonListData } from './utils';

// components
import { PokemonList, TouchableMessage } from './components';
import { Loader, SearchBar, Visibility } from '../../components';

// hooks
import { usePaginatedPokemons } from './hooks';

// styles
import { styles } from './HomeScreenStyles';

// types
import { PokemonDataMapped } from '../../types';

export const Home = () => {
	const {
		paginatedPokemons,
		getPaginatedPokemons,
		isPaginatedPokemonsError,
		isLoadingPaginatedPokemons,
		isPaginatedPokemonsSuccess,
	} = usePaginatedPokemons();

	const [searchInputValue, setSearchInputValue] = useState('');

	const pokemonListData = useMemo(() => {
		const pokemonListData = getPokemonListData(
			searchInputValue,
			paginatedPokemons,
		);

		return pokemonListData as Array<PokemonDataMapped> | [];
	}, [searchInputValue, paginatedPokemons]);

	const { emptyMessage, shouldShowEmptyMessage } = useMemo(() => {
		const shouldShowEmptyMessage =
			isPaginatedPokemonsError ||
			(pokemonListData?.length === 0 &&
				(isPaginatedPokemonsSuccess || searchInputValue !== ''));

		const emptyMessage =
			shouldShowEmptyMessage && searchInputValue !== ''
				? 'Pokemon not found!, please try another name or try again by clicking here!'
				: 'Oops, looks like all the pokemon are resting! Try at another time or try again by clicking here!';

		return { emptyMessage, shouldShowEmptyMessage };
	}, [pokemonListData, searchInputValue, isPaginatedPokemonsError]);

	return (
		<View style={styles.container}>
			<SearchBar value={searchInputValue} onChangeText={setSearchInputValue} />
			<Loader isVisible={isLoadingPaginatedPokemons} />
			<TouchableMessage
				message={emptyMessage}
				isVisible={shouldShowEmptyMessage}
				onPress={() => setSearchInputValue('')}
			/>
			<PokemonList
				data={pokemonListData}
				onLoadMore={getPaginatedPokemons}
				shouldEnableLoadMore={searchInputValue === ''}
			/>
		</View>
	);
};
