// vendors
import React, { useState } from 'react';
import { FlatList, TouchableHighlight } from 'react-native';

// components
import { PokemonDetailsModal, PokemonBox } from '../../../../components';

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
	const [selectedPokemon, setSelectedPokemon] = useState<
		PokemonDataMapped | {}
	>({});

	return (
		<>
			<PokemonDetailsModal
				onClose={() => setSelectedPokemon({})}
				data={selectedPokemon as PokemonDataMapped}
				isVisible={Object.keys(selectedPokemon)?.length > 0}
			/>

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
						onPress={() => setSelectedPokemon(item)}>
						<PokemonBox pokemonData={item} />
					</TouchableHighlight>
				)}
				onEndReachedThreshold={0.5}
				onEndReached={() => (shouldEnableLoadMore ? onLoadMore() : null)}
			/>
		</>
	);
}
