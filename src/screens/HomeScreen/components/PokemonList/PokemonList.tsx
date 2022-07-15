// vendors
import React from 'react';
import { View, FlatList } from 'react-native';

// components
import { PokemonBox } from '../../../../components';

// styles
import { styles } from './PokemonListStyles';

// types
import { PokemonDataMappedTypes } from '../../types';

type PokemonListPropTypes = {
	onLoadMore: () => void;
	data: Array<PokemonDataMappedTypes>;
};

export function PokemonList({ data, onLoadMore }: PokemonListPropTypes) {
	return (
		<FlatList
			data={data}
			numColumns={2}
			style={styles.container}
			columnWrapperStyle={styles.columnWrapper}
			contentContainerStyle={styles.contentContainer}
			renderItem={({ item }) => (
				<View style={styles.boxContainer}>
					<PokemonBox id={item?.id} name={item?.name} imgUri={item?.imgUri} />
				</View>
			)}
			onEndReached={onLoadMore}
			onEndReachedThreshold={-0.1}
		/>
	);
}
