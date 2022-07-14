// vendors
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// constants
import { PATHS } from '../../constants/Paths';

// styles
import { styles } from './HomeScreenStyles';

export const HomeScreen = () => {
	const navigation = useNavigation();

	const onPressItem = () => {
		navigation.navigate(PATHS.POKEMON_DETAILS);
	};

	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={onPressItem}>
				<Text>Go to details</Text>
			</TouchableHighlight>
		</View>
	);
};
