// vendors
import React from 'react';
import { ScrollView, View, Text } from 'react-native';

// styles
import { styles } from './PokemonDetailsScreenStyles';

export function PokemonDetails() {
	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.container}>
				<Text style={styles.title}>Pokemon Details</Text>
			</View>
		</ScrollView>
	);
}
