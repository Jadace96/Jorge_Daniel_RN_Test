// vendors
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// constants
import { colors } from '../../constants';

// styles
import { styles } from './LoaderComponentStyles';

export function Loader() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={colors.base.black} />
		</View>
	);
}
