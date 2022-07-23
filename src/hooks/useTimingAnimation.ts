// vendors
import { useState } from 'react';
import { Animated, Easing } from 'react-native';

// types
type useTimingAnimationProps = {
	onStartAnimation?: () => void;
	onFinishAnimation?: () => void;
};

export function useTimingAnimation({
	onStartAnimation = () => {},
	onFinishAnimation = () => {},
}: useTimingAnimationProps) {
	const animation = useState(new Animated.Value(0))[0];

	const startAnimation = () => {
		onStartAnimation();
		animation.setValue(0);
		Animated.timing(animation, {
			toValue: 1,
			duration: 1500,
			useNativeDriver: true, // To make use of native driver for performance
			easing: Easing.linear, // Easing is an additional import from react-native
		}).start(() => onFinishAnimation());
	};

	const rotateValue = animation.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: ['0deg', '360deg', '720deg'],
	});

	return {
		animation,
		rotateValue,
		startAnimation,
	};
}
