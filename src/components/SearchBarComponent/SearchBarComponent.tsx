// vendors
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput } from 'react-native';

// utils
import { debounce } from '../../utils';

// constants
import { colors } from '../../constants';

// styles
import { styles } from './SearchBarComponentStyles';

// types
type SearchBarPropTypes = {
	onChangeText: (textInputValue: string) => void;
};

export function SearchBar({ onChangeText }: SearchBarPropTypes) {
	return (
		<View style={styles.container}>
			<AntDesign name="search1" size={20} color={colors.text.secondary} />
			<TextInput
				placeholder="Search"
				style={styles.textInput}
				onChangeText={debounce(onChangeText)}
				placeholderTextColor={colors.text.secondary}
			/>
		</View>
	);
}
