// vendors
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// constants
import { colors } from '../../constants';

// types
type FavoriteIconProps = {
	color?: string;
	isActive?: boolean;
	onPressIcon?: Function;
};

export const FavoriteIcon = ({
	color,
	isActive = false,
	onPressIcon = () => {},
}: FavoriteIconProps) => {
	const [isStarActive, setIsStarActive] = useState(isActive);

	return (
		<TouchableOpacity
			onPress={() => {
				onPressIcon(!isStarActive);
				setIsStarActive(!isStarActive);
			}}>
			<MaterialIcons
				size={25}
				color={color || colors.base.black}
				name={isStarActive ? 'favorite' : 'favorite-border'}
			/>
		</TouchableOpacity>
	);
};
