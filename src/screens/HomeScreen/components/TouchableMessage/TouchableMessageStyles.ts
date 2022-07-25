// vendors
import { StyleSheet } from 'react-native';

// constants
import { colors, layout } from '../../../../constants';

export const styles = StyleSheet.create({
	container: {
		padding: 15,
		alignItems: 'center',
		top: layout.searchBarHeight,
	},
	message: {
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center',
		color: colors.text.primary,
	},
});
