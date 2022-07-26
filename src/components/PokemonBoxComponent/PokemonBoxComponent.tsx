// vendors
import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

// utils
import { capitalizeFirstLetter } from '../../utils';

// styles
import { styles, getContainerStyles } from './PokemonBoxComponentStyles';

// types
import { PokemonDataMapped } from '../../types';

type PokemonBoxProps = {
	showFullDetails?: boolean;
	pokemonData: PokemonDataMapped;
};

export function PokemonBox({
	pokemonData,
	showFullDetails = false,
}: PokemonBoxProps) {
	const headerHeight = useHeaderHeight();
	const [mainImage, setMainImage] = useState(pokemonData?.imgUri);

	return (
		<View style={getContainerStyles()}>
			<Image
				source={{ uri: mainImage }}
				style={showFullDetails ? styles.fullImage : styles.image}
			/>
			<Text style={styles.text}># {pokemonData?.id}</Text>
			<Text style={styles.text}>
				{capitalizeFirstLetter(pokemonData?.name)}
			</Text>
			{showFullDetails && (
				<ScrollView
					style={styles.fullDetailsContainer}
					contentContainerStyle={{ paddingBottom: headerHeight }}>
					<Text style={styles.text}>Types</Text>
					<Text style={styles.smalText}>{pokemonData?.types?.join(', ')}</Text>
					<Text style={styles.text}>Weight</Text>
					<Text style={styles.smalText}>{pokemonData?.weight}kg</Text>
					<Text style={styles.text}>Sprites</Text>
					<ScrollView
						horizontal
						style={styles.horizontalScrollContainer}
						contentContainerStyle={styles.horizontalScrollContentContainer}>
						{[pokemonData?.imgUri, ...pokemonData?.sprites].map(sprite => (
							<TouchableHighlight
								key={sprite}
								style={styles.spriteContainer}
								onPress={() => setMainImage(sprite)}>
								<Image style={styles.spriteImg} source={{ uri: sprite }} />
							</TouchableHighlight>
						))}
					</ScrollView>
					<Text style={styles.text}>Movements</Text>
					<ScrollView
						horizontal
						style={styles.horizontalScrollContainer}
						contentContainerStyle={styles.horizontalScrollContentContainer}>
						<Text style={styles.smalText}>
							{pokemonData?.movements?.join(', ')}
						</Text>
					</ScrollView>
				</ScrollView>
			)}
		</View>
	);
}
