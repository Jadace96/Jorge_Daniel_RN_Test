// vendors
import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
} from 'react-native';

// utils
import { capitalizeFirstLetter } from '../../utils';

// components
import { RenderIf } from '../RenderIfComponent';

// styles
import { styles, getContainerStyles } from './PokemonBoxComponentStyles';

// types
import { PokemonDataMappedTypes } from '../../types';

type PokemonBoxTypes = PokemonDataMappedTypes & {
	showFullDetails?: boolean;
};

export function PokemonBox({
	id,
	name,
	types,
	imgUri,
	weight,
	sprites,
	movements,
	showFullDetails = false,
}: PokemonBoxTypes) {
	const [mainImage, setMainImage] = useState(imgUri);
	return (
		<View style={getContainerStyles(showFullDetails)}>
			<Image
				resizeMode="cover"
				style={showFullDetails ? styles.fullImage : styles.image}
				source={{ uri: mainImage }}
			/>
			<Text style={styles.text}># {id}</Text>
			<Text style={styles.text}>{capitalizeFirstLetter(name)}</Text>
			<RenderIf
				condition={showFullDetails}
				component={
					<View style={styles.fullDetailsContainer}>
						<Text style={styles.text}>Types</Text>
						<Text style={styles.smalText}>{types?.join(', ')}</Text>
						<Text style={styles.text}>Weight</Text>
						<Text style={styles.smalText}>{weight}kg</Text>
						<Text style={styles.text}>Sprites</Text>
						<ScrollView
							horizontal
							style={styles.spritesContainer}
							contentContainerStyle={styles.spritesContentContainer}>
							{[imgUri, ...sprites]?.map(sprite => (
								<TouchableHighlight
									key={sprite}
									style={styles.spriteContainer}
									onPress={() => setMainImage(sprite)}>
									<Image
										resizeMode="cover"
										style={styles.spriteImg}
										source={{ uri: sprite }}
									/>
								</TouchableHighlight>
							))}
						</ScrollView>
						<Text style={styles.text}>Movements</Text>
						<ScrollView
							horizontal
							style={styles.spritesContainer}
							contentContainerStyle={styles.spritesContentContainer}>
							<Text style={styles.smalText}>{movements?.join(', ')}</Text>
						</ScrollView>
					</View>
				}
			/>
		</View>
	);
}
