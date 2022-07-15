// vendors
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput } from 'react-native';

// utils
import { debounce } from '../../utils';

// styles
import { styles } from './SearchBarComponentStyles';
import { colors } from '../../constants';

export function SearchBar() {
	const [textInputValue, setTextInputValue] = useState('');

	return (
		<View style={styles.container}>
			<AntDesign name="search1" size={20} color={colors.text.secondary} />
			<TextInput
				placeholder="Search"
				// value={textInputValue}
				style={styles.textInput}
				placeholderTextColor={colors.text.secondary}
				onChangeText={() => debounce(setTextInputValue)}
			/>
		</View>
	);
}
