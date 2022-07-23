// vendors
import { View } from 'react-native';
import React, { useMemo, useState } from 'react';

// utils
import { getPokemonListData } from './utils';

// components
import { PokemonList } from './components';
import { Loader, RenderIf, SearchBar, RefreshIcon } from '../../components';

// hooks
import { usePaginatedPokemons } from './hooks';

// styles
import { styles } from './HomeScreenStyles';

// types
import { PokemonDataMapped } from './types';

export const Home = () => {
	const {
		paginatedPokemons,
		getPaginatedPokemons,
		isPaginatedPokemonsError,
		isPaginatedPokemonsSuccess,
		isLoadingPaginatedPokemons,
	} = usePaginatedPokemons();

	const [searchInputValue, setSearchInputValue] = useState('');

	const pokemonListData = useMemo(() => {
		const pokemonListData: Array<PokemonDataMapped> = getPokemonListData(
			searchInputValue,
			paginatedPokemons,
		);

		return pokemonListData;
	}, [searchInputValue, paginatedPokemons]);

	return (
		<View style={styles.container}>
			<SearchBar value={searchInputValue} onChangeText={setSearchInputValue} />
			<RenderIf component={<Loader />} condition={isLoadingPaginatedPokemons} />
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
					<RefreshIcon
						withIcon={false}
						textStyles={styles.emptyMessageText}
						onRefresh={() => setSearchInputValue('')}
						stopAnimation={isPaginatedPokemonsSuccess}
						text={
							isPaginatedPokemonsError && searchInputValue === ''
								? 'Oops, looks like all the pokemon are resting! Wait a moment or try again by clicking here!'
								: 'Pokemon not found!, please try another name or try again by clicking here!'
						}
					/>
				}
			/>
		</View>
	);
};
