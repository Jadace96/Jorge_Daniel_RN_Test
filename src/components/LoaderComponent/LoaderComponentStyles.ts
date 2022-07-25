// vendors
import { StyleSheet } from 'react-native';

// constants
import { colors } from './../../constants';

export const styles = StyleSheet.create({
	container: {
		opacity: 0.6,
		width: '100%',
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 3, // works on ios
		elevation: 3, // works on android
		backgroundColor: colors.background.secondary,
	},
});
