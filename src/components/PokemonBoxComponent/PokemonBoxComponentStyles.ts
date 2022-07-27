// vendors
import { StyleSheet } from 'react-native';

// utils
import { darkenHexColor } from '../../utils';

// constants
import { colors } from './../../constants';

export const styles = StyleSheet.create({
	container: {
		borderWidth: 3,
		paddingBottom: 10,
		alignItems: 'center',
	},
	image: {
		width: 130,
		height: 130,
		marginBottom: 5,
	},
	fullImage: {
		width: 200,
		height: 200,
		marginTop: 5,
		marginBottom: 15,
	},
	text: {
		fontSize: 18,
		fontWeight: '600',
	},
	smalText: {
		fontSize: 15,
		marginBottom: 15,
	},
	fullDetailsContainer: {
		width: '100%',
		padding: 20,
	},
	horizontalScrollContainer: {
		marginBottom: 7,
	},
	horizontalScrollContentContainer: {
		marginTop: 7,
		flexWrap: 'nowrap',
		flexDirection: 'row',
	},
	spriteContainer: {
		width: 40,
		height: 40,
		borderRadius: 100,
		marginHorizontal: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		backgroundColor: colors.background.secondary,
		borderColor: darkenHexColor(colors.background.secondary),
	},
	spriteImg: {
		width: '100%',
		height: '100%',
	},
	favoriteIconContainer: {
		right: 0,
		padding: 5,
		position: 'absolute',
	},
	favoriteIconFullDetailsContainer: {
		left: 0,
		padding: 15,
		position: 'absolute',
	},
});

export const getContainerStyles = () => ({
	...styles.container,
	// ...getRandomBackgroundAndBorderColor(),
});
