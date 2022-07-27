// vendors
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// constants
import { colors } from '../../constants';

// styles
import { styles } from './FavoriteIconComponentsStyles';

// types
type FavoriteIconProps = {
	isActive?: boolean;
	onPressIcon?: Function;
};

export const FavoriteIcon = ({
	isActive = false,
	onPressIcon = () => {},
}: FavoriteIconProps) => {
	const [isStarActive, setIsStarActive] = useState(isActive);

	const onPressStar = () => {
		setIsStarActive(!isStarActive);
		onPressIcon(!isStarActive);
	};

	return (
		<TouchableOpacity onPress={onPressStar} style={styles.container}>
			<MaterialIcons
				size={25}
				color={colors.base.yellow}
				name={isStarActive ? 'favorite' : 'favorite-border'}
			/>
		</TouchableOpacity>
	);
};
