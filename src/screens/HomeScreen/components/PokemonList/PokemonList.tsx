// vendors
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableHighlight } from 'react-native';

// components
import { PokemonBox } from '../../../../components';

// constants
import { PATHS } from '../../../../constants';

// styles
import { styles } from './PokemonListStyles';

// types
import { PokemonDataMapped } from '../../../../types';

type PokemonListProps = {
	onLoadMore: () => void;
	shouldEnableLoadMore: boolean;
	data: Array<PokemonDataMapped>;
};

export function PokemonList({
	data,
	onLoadMore,
	shouldEnableLoadMore = true,
}: PokemonListProps) {
	const navigation = useNavigation();

	const onPressPokemonBox = (pokemonDetails: PokemonDataMapped) =>
		navigation.navigate(
			PATHS.POKEMON_DETAILS as never,
			{ pokemonDetails } as never,
		);

	return (
		<FlatList
			data={data}
			numColumns={2}
			style={styles.container}
			keyExtractor={item => item.id.toString()}
			columnWrapperStyle={styles.columnWrapper}
			contentContainerStyle={styles.contentContainer}
			renderItem={({ item }) => (
				<TouchableHighlight
					key={item.id}
					style={styles.boxContainer}
					onPress={() => onPressPokemonBox(item)}>
					<PokemonBox {...item} />
				</TouchableHighlight>
			)}
			onEndReachedThreshold={0.5}
			onEndReached={shouldEnableLoadMore ? onLoadMore : null}
		/>
	);
}
