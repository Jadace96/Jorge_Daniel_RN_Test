// vendors
import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import { PokemonBox } from '../../../../components';

// constants
import { PATHS } from '../../../../constants';

// styles
import { styles } from './PokemonListStyles';

// types
import { PokemonDataMappedTypes } from '../../types';

type PokemonListPropTypes = {
	onLoadMore: () => void;
	shouldEnableLoadMore: boolean;
	data: Array<PokemonDataMappedTypes>;
};

export function PokemonList({
	data,
	onLoadMore,
	shouldEnableLoadMore = true,
}: PokemonListPropTypes) {
	const navigation = useNavigation();

	const onPressPokemonBox = (pokemonDetails: PokemonDataMappedTypes) => {
		navigation.navigate(
			PATHS.POKEMON_DETAILS as never,
			{ pokemonDetails } as never,
		);
	};
	return (
		<FlatList
			data={data}
			numColumns={2}
			style={styles.container}
			columnWrapperStyle={styles.columnWrapper}
			contentContainerStyle={styles.contentContainer}
			renderItem={({ item }) => (
				<TouchableHighlight
					onPress={() => onPressPokemonBox(item)}
					style={styles.boxContainer}>
					<PokemonBox {...item} />
				</TouchableHighlight>
			)}
			onEndReached={shouldEnableLoadMore ? onLoadMore : null}
			onEndReachedThreshold={shouldEnableLoadMore ? 0.5 : null}
		/>
	);
}
