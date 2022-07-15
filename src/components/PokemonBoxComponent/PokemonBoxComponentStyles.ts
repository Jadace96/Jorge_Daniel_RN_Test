// vendors
import { StyleSheet } from 'react-native';

// utils
import { getRandomBackgroundAndBorderColor } from '../../utils';

export const styles = StyleSheet.create({
	container: {
		borderWidth: 3,
		paddingBottom: 10,
		alignItems: 'center',
	},
	image: {
		width: 100,
		height: 120,
		marginBottom: 5,
	},
	text: {
		fontWeight: '600',
	},
});

export const getContainerStyles = () => ({
	...styles.container,
	...getRandomBackgroundAndBorderColor(),
});
