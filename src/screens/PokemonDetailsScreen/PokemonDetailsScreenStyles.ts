// vendors
import { StyleSheet } from 'react-native';

// constants
import { colors } from '../../constants';

export const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
	},

	container: {
		justifyContent: 'flex-start',
	},

	title: {
		width: '100%',
		fontSize: 23,
		marginTop: 15,
		paddingLeft: 20,
		paddingVertical: 6,
		fontWeight: 'bold',
	},

	description: {
		fontSize: 15,
		width: '100%',
		paddingVertical: 6,
		textAlign: 'justify',
		paddingHorizontal: 20,
		color: colors.text.primary,
	},
});
