// vendors
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// constants
import { PATHS } from '../constants';

// types
export type RootStackParamList = {
	Home: undefined;
	PokemonDetails: undefined;
};

// screens
import { Home, PokemonDetails } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
	const navigation = useNavigation();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name={PATHS.HOME as never}
				component={Home}
				options={{
					title: 'Pokemon',
					headerTitleAlign: 'center',
				}}
			/>
			<Stack.Screen
				name={PATHS.POKEMON_DETAILS as never}
				component={PokemonDetails}
				options={{
					title: 'Details',
					headerTitleAlign: 'center',
					headerLeft: () => (
						<AntDesign
							size={24}
							name="left"
							onPress={navigation.goBack}
							style={{ left: -10, padding: 10 }}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
