// vendors
import { StyleSheet } from 'react-native';

// utils
import { darkenHexColor, getRandomBackgroundAndBorderColor } from '../../utils';

// constants
import { colors, layout } from './../../constants';

export const styles = StyleSheet.create({
	container: {
		borderWidth: 3,
		paddingBottom: 10,
		alignItems: 'center',
	},
	fullViewContainer: {
		borderWidth: 3,
		paddingBottom: 10,
		alignItems: 'center',
		height: layout.height,
	},
	image: {
		width: 100,
		height: 120,
		marginBottom: 5,
	},
	fullImage: {
		width: 200,
		height: 200,
		marginBottom: 5,
	},
	text: {
		fontSize: 17,
		fontWeight: '600',
	},
	smalText: {
		fontSize: 13,
		marginBottom: 15,
	},
	fullDetailsContainer: {
		width: '100%',
		padding: 20,
	},
	spritesContainer: {
		marginBottom: 7,
	},
	spritesContentContainer: {
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
});

export const getContainerStyles = (showFullDetails = false) => ({
	...(showFullDetails ? styles.fullViewContainer : styles.container),
	...getRandomBackgroundAndBorderColor(),
});
