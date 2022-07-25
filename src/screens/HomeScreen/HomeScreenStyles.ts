// vendors
import { StyleSheet } from 'react-native';

// constants
import { colors } from './../../constants';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	emptyMessageContainer: {
		alignItems: 'center',
		paddingHorizontal: 15,
	},
	emptyMessageText: {
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center',
		color: colors.text.primary,
	},
});
