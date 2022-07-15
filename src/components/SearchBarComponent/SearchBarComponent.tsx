// vendors
import React, { MutableRefObject } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { View, TextInput } from 'react-native';

// utils
import { debounce } from '../../utils';

// constants
import { colors } from '../../constants';

// styles
import { styles } from './SearchBarComponentStyles';
import { RenderIf } from '../RenderIfComponent';

// types
type SearchBarPropTypes = {
	value?: string;
	onChangeText: (textInputValue: string) => void;
};

export function SearchBar({ value, onChangeText }: SearchBarPropTypes) {
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
			<RenderIf
				condition={value !== ''}
				component={
					<MaterialIcons
						size={24}
						name="clear"
						color={colors.text.secondary}
						onPress={() => onChangeText('')}
					/>
				}
			/>
		</View>
	);
}
