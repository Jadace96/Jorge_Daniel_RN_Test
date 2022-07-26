// vendors
import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { fireEvent, render, screen } from '@testing-library/react-native';

// components
import { SearchBar } from '..';

// components
import { Visibility } from '../../VisibilityComponent';

const mockProps = {
	value: '',
	onChangeText: jest.fn(),
};
const mockNewTextInputVale = 'Mock test input value';

describe('SearchBar component test suit', () => {
	it('should trigger onChangeText prop', () => {
		render(<SearchBar {...mockProps} />);

		const TextInputComponent = screen.container.findByType(TextInput);
		fireEvent.changeText(TextInputComponent, mockNewTextInputVale);

		expect(mockProps.onChangeText).toHaveBeenLastCalledWith(
			mockNewTextInputVale,
		);
	});

	it('should display clear icon and trigger onChangeText prop', () => {
		mockProps.value = 'Test';
		render(<SearchBar {...mockProps} />);

		const ClearIconWrapper = screen.container.findByType(Visibility);
		expect(ClearIconWrapper.props.isVisible).toEqual(true);

		const ClearIcon = screen.container.findByType(MaterialIcons);

		fireEvent.press(ClearIcon);

		expect(mockProps.onChangeText).toHaveBeenLastCalledWith('');
	});
});
