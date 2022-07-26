// vendors
import React from 'react';
import { View } from 'react-native';
import { PokemonBox } from '../../components';

// styles
import { styles } from './PokemonDetailsScreenStyles';
import { PokemonDataMapped } from '../../types';

// types
type PokemonDetailsProps = {
	route: {
		params: {
			pokemonDetails: PokemonDataMapped;
		};
	};
};

export function PokemonDetails({ route }: PokemonDetailsProps) {
	return (
		<View style={styles.scrollContainer}>
			<PokemonBox showFullDetails pokemonData={route.params.pokemonDetails} />
		</View>
	);
}
