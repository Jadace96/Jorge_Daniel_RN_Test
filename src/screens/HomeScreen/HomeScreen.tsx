// vendors
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import { PokemonList } from './components';
import { SearchBar, PokemonBox } from '../../components';

// hooks
import { usePokemon } from './hooks';

// constants
import { PATHS } from '../../constants/Paths';

// styles
import { styles } from './HomeScreenStyles';

export const Home = () => {
	const { pokemonsData, isFetching, isError } = usePokemon();
	const navigation = useNavigation();

	const onPressItem = () => {
		navigation.navigate(PATHS.POKEMON_DETAILS);
	};

	if (isFetching) {
		return <Text>Loading...</Text>;
	} else if (isError) {
		return <Text>An error has ocurred</Text>;
	}

	return (
		<View style={styles.container}>
			<SearchBar />
			<PokemonList data={pokemonsData} />
		</View>
	);
};
