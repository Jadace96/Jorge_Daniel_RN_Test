// vendors
import { Platform, Dimensions } from 'react-native';

// types
type LayoutData = {
	width: number;
	height: number;
	isIOS: boolean;
	isAndroid: boolean;
	isSmallDevice: boolean;
};

// constants
const { width, height } = Dimensions.get('window');

export const layout: LayoutData = {
	width,
	height,
	isSmallDevice: width < 375,
	isIOS: Platform.OS === 'ios',
	isAndroid: Platform.OS === 'android',
};
