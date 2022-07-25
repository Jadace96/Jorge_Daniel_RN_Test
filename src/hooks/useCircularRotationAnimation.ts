// vendors
import { useState, useMemo } from 'react';
import { Animated, Easing } from 'react-native';

// types
type useCircularRotationAnimationProps = {
	isInfinite?: boolean;
	speed?: 'normal' | 'fast';
	onStartAnimation?: () => void;
	onFinishAnimation?: () => void;
};

export function useCircularRotationAnimation({
	speed = 'normal',
	isInfinite = false,
	onStartAnimation = () => {},
	onFinishAnimation = () => {},
}: useCircularRotationAnimationProps = {}) {
	const animation = useState(new Animated.Value(0))[0];

	const rotationSpeed = useMemo(() => {
		const speeds = {
			normal: [0, 1, 2],
			fast: [0, 0.5, 1],
		};

		return speeds[speed];
	}, [speed]);

	const startAnimation = () => {
		onStartAnimation();
		animation.setValue(0);

		const animatedTiming = Animated.timing(animation, {
			toValue: 1,
			duration: 1500,
			useNativeDriver: true, // To make use of native driver for performance
			easing: Easing.linear, // Easing is an additional import from react-native
		});

		isInfinite
			? Animated.loop(animatedTiming).start(onFinishAnimation)
			: animatedTiming.start(onFinishAnimation);
	};

	const rotationValue = animation.interpolate({
		inputRange: rotationSpeed,
		outputRange: ['0deg', '360deg', '720deg'],
	});

	return {
		animation,
		rotationValue,
		startAnimation,
	};
}
