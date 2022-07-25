// vendors
import React, { useMemo, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

// utils
import { getPokemonListData } from './utils';

// components
import { PokemonList } from './components';
import { Loader, RenderIf, SearchBar, Refresh } from '../../components';

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
	} = usePaginatedPokemons();

	const [searchInputValue, setSearchInputValue] = useState('');

	const pokemonListData = useMemo(() => {
		const pokemonListData = getPokemonListData(
			searchInputValue,
			paginatedPokemons,
		);

		return pokemonListData as Array<PokemonDataMapped> | [];
	}, [searchInputValue, paginatedPokemons]);

	return (
		<View style={styles.container}>
			<SearchBar value={searchInputValue} onChangeText={setSearchInputValue} />
			<Loader isVisible={isLoadingPaginatedPokemons} />
			<PokemonList
				data={pokemonListData}
				onLoadMore={getPaginatedPokemons}
				shouldEnableLoadMore={searchInputValue === ''}
			/>
			<RenderIf
				condition={
					pokemonListData?.length === 0 &&
					(isPaginatedPokemonsError || searchInputValue !== '')
				}
				component={
					<TouchableOpacity
						style={styles.emptyMessageContainer}
						onPress={() => setSearchInputValue('')}>
						<Text style={styles.emptyMessageText}>
							{isPaginatedPokemonsError && searchInputValue === ''
								? 'Oops, looks like all the pokemon are resting! Wait a moment or try again by clicking here!'
								: 'Pokemon not found!, please try another name or try again by clicking here!'}
						</Text>
					</TouchableOpacity>
				}
			/>
		</View>
	);
};
