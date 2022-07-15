// vendors
import { StyleSheet } from 'react-native';

// constants
import { colors } from '../../constants';

export const styles = StyleSheet.create({
	container: {
		top: 15,
		height: 40,
		width: '95%',
		borderWidth: 1,
		borderRadius: 2,
		marginBottom: 15,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
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
