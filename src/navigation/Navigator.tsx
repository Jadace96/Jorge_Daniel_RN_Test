// vendors
import React from 'react';
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// constants
import { colors, PATHS } from '../constants';

// screens
import { Home, Favorites } from '../screens';

const Tab = createBottomTabNavigator();

const commonBottomTabOptions: BottomTabNavigationOptions = {
	headerTitleAlign: 'center',
	tabBarStyle: {
		height: 50,
	},
	tabBarLabelStyle: {
		fontSize: 13,
		marginBottom: 3,
		color: colors.base.black,
	},
};

export function RootNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				component={Home}
				name={PATHS.HOME}
				options={{
					title: 'Home',
					...commonBottomTabOptions,
					tabBarIcon: () => (
						<MaterialCommunityIcons
							size={28}
							name="pokemon-go"
							color={colors.base.black}
						/>
					),
				}}
			/>
			<Tab.Screen
				component={Favorites}
				name={PATHS.FAVORITES}
				options={{
					title: 'Favorites',
					...commonBottomTabOptions,
					tabBarIcon: () => (
						<MaterialIcons
							size={28}
							name="favorite-border"
							color={colors.base.black}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
