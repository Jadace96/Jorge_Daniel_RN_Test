// vendors
import { StyleSheet } from 'react-native';

// constants
import { colors, layout } from '../../constants';

export const styles = StyleSheet.create({
	container: {
		top: 15,
		width: '95%',
		borderWidth: 1,
		borderRadius: 2,
		marginBottom: 15,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
		height: layout.searchBarHeight,
		borderColor: colors.border.primary,
		backgroundColor: colors.background.primary,
	},

	textInput: {
		flex: 1,
		marginLeft: 8,
		height: '100%',
		marginRight: 15,
		color: colors.text.primary,
	},
});
