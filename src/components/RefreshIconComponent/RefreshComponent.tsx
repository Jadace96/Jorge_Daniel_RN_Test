// vendors
import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, Animated, TouchableOpacity, Keyboard } from 'react-native';

// hooks
import { useTimingAnimation } from '../../hooks';

// constants
import { colors } from '../../constants';

// styles
import { styles } from './RefreshComponentStyles';
import { RenderIf } from '../RenderIfComponent';

type RefreshProps = {
	text?: string;
	textStyles: {};
	withIcon?: boolean;
	textOnTop?: boolean;
	iconStyles?: Object;
	onRefresh?: () => void;
	stopAnimation?: boolean;
	afterRefresh?: () => void;
};

export const Refresh = ({
	text = '',
	onRefresh,
	textStyles,
	afterRefresh,
	stopAnimation,
	textOnTop = true,
	withIcon = true,
}: RefreshProps) => {
	const { animation, rotateValue, startAnimation } = useTimingAnimation({
		onStartAnimation: onRefresh,
		onFinishAnimation: afterRefresh,
	});

	useEffect(() => {
		stopAnimation && animation.setValue(0);
	}, [stopAnimation]);

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => {
				startAnimation();
				Keyboard.dismiss();
			}}>
			<RenderIf
				condition={textOnTop}
				component={<Text style={textStyles}>{text}</Text>}
			/>
			<RenderIf
				condition={withIcon}
				component={
					<Animated.View
						style={{
							...styles.refreshIcon,
							transform: [{ rotate: rotateValue }],
						}}>
						<Feather name="refresh-ccw" size={40} color={colors.base.black} />
					</Animated.View>
				}
			/>

			<RenderIf
				condition={!textOnTop}
				component={<Text style={textStyles}>{text}</Text>}
			/>
		</TouchableOpacity>
	);
};
