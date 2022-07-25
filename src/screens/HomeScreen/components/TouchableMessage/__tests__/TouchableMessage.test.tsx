// vendors
import { TouchableOpacity } from 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';

// components
import { TouchableMessage } from '..';
import { Visibility } from '../../../../../components';

// mocks
const mockProps = {
	isVisible: false,
	onPress: jest.fn(),
	message: 'Mock touchable message',
};

describe('TouchableMessage test suit', () => {
	it('should not show the component', () => {
		render(<TouchableMessage {...mockProps} />);

		const WrapperComponent = screen.container.findByType(Visibility);

		expect(WrapperComponent.props.isVisible).toEqual(false);
	});

	it('should show the component', () => {
		mockProps.isVisible = true;
		render(<TouchableMessage {...mockProps} />);

		const WrapperComponent = screen.container.findByType(Visibility);

		expect(WrapperComponent.props.isVisible).toEqual(true);
	});

	it('should trigger onPress prop', () => {
		mockProps.isVisible = true;
		render(<TouchableMessage {...mockProps} />);

		const TouchableText = screen.container.findByType(TouchableOpacity);

		fireEvent.press(TouchableText);

		expect(mockProps.onPress).toHaveBeenCalledTimes(1);
	});
});
