// vendors
import { Platform, Dimensions } from 'react-native';

// types
type LayoutData = {
	width: number;
	height: number;
	isIOS: boolean;
	isAndroid: boolean;
	isSmallDevice: boolean;
	searchBarHeight: number;
};

// constants
const { width, height } = Dimensions.get('window');

export const layout: LayoutData = {
	width,
	height,
	searchBarHeight: 40,
	isSmallDevice: width < 375,
	isIOS: Platform.OS === 'ios',
	isAndroid: Platform.OS === 'android',
};
