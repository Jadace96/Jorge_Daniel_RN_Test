// vendors
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// utils
import { getFilteredValuesByName } from '../../utils';

// components
import { PokemonList } from './components';
import { RenderIf, SearchBar, LoaderComponent } from '../../components';

// hooks
import { usePokemon } from './hooks';

// constants
import { PATHS } from '../../constants/Paths';

// styles
import { styles } from './HomeScreenStyles';

// types
import { PokemonDataMappedTypes } from './types';

export const Home = () => {
	const navigation = useNavigation();
	const { getPokemons, pokemonsData, isFetching, isError } = usePokemon();

	const [filteredPokemons, setFilteredPokemons] = useState<
		Array<PokemonDataMappedTypes>
	>([]);

	const onPressItem = () => {
		navigation.navigate(PATHS.POKEMON_DETAILS);
	};

	const onSearchBarChange = (value: string) => {
		const filteredPokemonsByName = getFilteredValuesByName(pokemonsData, value);

		setFilteredPokemons(filteredPokemonsByName);
	};

	if (isError) {
		return <Text>An error has ocurred</Text>;
	}

	return (
		<View style={styles.container}>
			<SearchBar onChangeText={onSearchBarChange} />
			<RenderIf condition={isFetching} component={<LoaderComponent />} />
			<PokemonList
				shouldEnableLoadMore={filteredPokemons?.length === 0}
				onLoadMore={getPokemons}
				data={filteredPokemons?.length > 0 ? filteredPokemons : pokemonsData}
			/>
		</View>
	);
};
