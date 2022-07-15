// vendors
import React from 'react';
import { View } from 'react-native';
import { PokemonBox } from '../../components';

// styles
import { styles } from './PokemonDetailsScreenStyles';
import { PokemonDataMappedTypes } from '../../types';

// types
type PokemonDetailsPropTypes = {
	route: {
		params: {
			pokemonDetails: PokemonDataMappedTypes;
		};
	};
};

export function PokemonDetails({ route }: PokemonDetailsPropTypes) {
	return (
		<View style={styles.scrollContainer}>
			<PokemonBox {...route.params.pokemonDetails} showFullDetails />
		</View>
	);
}
