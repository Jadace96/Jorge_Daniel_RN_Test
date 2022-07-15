// vendors
import { StyleSheet } from 'react-native';

// constants
import { colors } from './../../constants';

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: colors.background.secondary,
		height: '100%',
		width: '100%',
		opacity: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 3, // works on ios
		elevation: 3, // works on android
	},
});
