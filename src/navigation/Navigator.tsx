// vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// constants
import { PATHS } from '../constants';

// types
export type RootStackParamList = {
	Home: undefined;
	PokemonDetails: undefined;
};

// screens
import { HomeScreen, PokemonDetailsScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
	const navigation = useNavigation();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name={PATHS.HOME}
				component={HomeScreen}
				options={{
					title: 'Pokemon List',
				}}
			/>
			<Stack.Screen
				name={PATHS.POKEMON_DETAILS}
				component={PokemonDetailsScreen}
				options={{
					title: 'Pokemon Details',
					headerLeft: () => (
						<AntDesign
							onPress={navigation.goBack}
							size={24}
							name="left"
							color="black"
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
