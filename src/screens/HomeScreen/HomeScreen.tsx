// vendors
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';

// utils
import { getPokemonListData } from './utils';

// components
import { PokemonList } from './components';
import { Loader, RenderIf, SearchBar, RefreshIcon } from '../../components';

// hooks
import { usePaginatedPokemons } from './hooks';

// constants
import { PATHS } from '../../constants/Paths';

// styles
import { styles } from './HomeScreenStyles';

// types
import { PokemonDataMappedTypes } from './types';

export const Home = () => {
	const navigation = useNavigation();
	const {
		paginatedPokemons,
		getPaginatedPokemons,
		isPaginatedPokemonsError,
		isPaginatedPokemonsSuccess,
		isLoadingPaginatedPokemons,
	} = usePaginatedPokemons();

	const [searchInputValue, setSearchInputValue] = useState('');

	// const onPressItem = () => {
	// 	navigation.navigate(PATHS.POKEMON_DETAILS);
	// };

	const pokemonListData = useMemo(() => {
		const pokemonListData: Array<PokemonDataMappedTypes> = getPokemonListData(
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
