// vendors
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// components
import { Visibility } from '../../../../components';

// styles
import { styles } from './TouchableMessageStyles';

// types
type TouchableMessageProps = {
	message: string;
	isVisible?: boolean;
	onPress?: () => void;
};

export function TouchableMessage({
	message,
	onPress,
	isVisible = false,
}: TouchableMessageProps) {
	return (
		<Visibility isVisible={isVisible}>
			<TouchableOpacity onPress={onPress} style={styles.container}>
				<Text style={styles.message}>{message}</Text>
			</TouchableOpacity>
		</Visibility>
	);
}
