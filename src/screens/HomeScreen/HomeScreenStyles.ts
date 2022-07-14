// vendors
import { StyleSheet } from 'react-native';

// constants
import { colors, layout } from '../../constants';

export const styles = StyleSheet.create({
	container: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},

	emptyMessageContainer: {
		alignItems: 'center',
		paddingHorizontal: 20,
		justifyContent: 'center',
	},

	emptyMessageText: {
		fontSize: 20,
		marginBottom: 15,
		fontWeight: '400',
		textAlign: 'center',
		color: colors.text.primary,
		marginTop: layout.isSmallDevice ? '50%' : '70%',
	},
});
