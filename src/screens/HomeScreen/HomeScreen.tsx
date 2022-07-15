// vendors
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import { PokemonList } from './components';
import { RenderIf, SearchBar, LoaderComponent } from '../../components';

// hooks
import { usePokemon } from './hooks';

// constants
import { PATHS } from '../../constants/Paths';

// styles
import { styles } from './HomeScreenStyles';

export const Home = () => {
	const navigation = useNavigation();
	const { getPokemons, pokemonsData, isFetching, isError } = usePokemon();

	const [searchValue, setSearchValue] = useState('');

	const onPressItem = () => {
		navigation.navigate(PATHS.POKEMON_DETAILS);
	};

	const onSearhTextChange = (value: string) => {
		console.log('value =>>>> ', value);
		setSearchValue(value);
	};

	if (isError) {
		return <Text>An error has ocurred</Text>;
	}

	return (
		<View style={styles.container}>
			<SearchBar onChangeText={onSearhTextChange} />
			<RenderIf condition={isFetching} component={<LoaderComponent />} />
			<PokemonList
				data={pokemonsData}
				onLoadMore={() => getPokemons(pokemonsData?.length)}
			/>
		</View>
	);
};
