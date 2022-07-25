// vendors
import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Animated } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

// constants
import { colors, layout } from '../../constants';

// hooks
import { useCircularRotationAnimation } from '../../hooks';

// styles
import { styles } from './LoaderComponentStyles';
import { Visibility } from '../VisibilityComponent';

// types
type LoaderProps = {
	isVisible: boolean;
};

export function Loader({ isVisible = false }: LoaderProps) {
	const headerHeight = useHeaderHeight();
	const { animation, rotationValue, startAnimation } =
		useCircularRotationAnimation({ isInfinite: true });

	useEffect(() => {
		isVisible ? startAnimation() : animation.stopAnimation();
	}, [isVisible]);

	return (
		<Visibility
			isVisible={isVisible}
			styles={{
				...styles.container,
				height: layout.height - headerHeight,
			}}>
			<Animated.View
				style={{
					transform: [{ rotate: rotationValue }],
				}}>
				<Feather name="loader" size={40} color={colors.base.black} />
			</Animated.View>
		</Visibility>
	);
}
