// vendors
import React from 'react';
import { View, Text, Image } from 'react-native';

// utils
import { capitalizeFirstLetter } from '../../utils';

// styles
import { styles, getContainerStyles } from './PokemonBoxComponentStyles';

// types
type PokemonBoxTypes = {
	id: number;
	name: string;
	imgUri: string;
};

export function PokemonBox({ id, name, imgUri }: PokemonBoxTypes) {
	return (
		<View style={getContainerStyles()}>
			<Image resizeMode="cover" style={styles.image} source={{ uri: imgUri }} />
			<Text style={styles.text}># {id}</Text>
			<Text style={styles.text}>{capitalizeFirstLetter(name)}</Text>
		</View>
	);
}
