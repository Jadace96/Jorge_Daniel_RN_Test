// vendors
import React from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

// components
import { Visibility } from '../VisibilityComponent';

// constants
import { colors } from '../../constants';

// styles
import { styles } from './SearchBarComponentStyles';

// types
type SearchBarProps = {
	value: string;
	onChangeText: (textInputValue: string) => void;
};

export function SearchBar({ value, onChangeText }: SearchBarProps) {
	return (
		<View style={styles.container}>
			<AntDesign name="search1" size={20} color={colors.text.secondary} />
			<TextInput
				value={value}
				placeholder="Search"
				style={styles.textInput}
				onChangeText={onChangeText}
				placeholderTextColor={colors.text.secondary}
			/>
			<Visibility isVisible={value !== ''}>
				<MaterialIcons
					size={24}
					name="clear"
					color={colors.text.secondary}
					onPress={() => {
						onChangeText('');
						Keyboard.dismiss();
					}}
				/>
			</Visibility>
		</View>
	);
}
