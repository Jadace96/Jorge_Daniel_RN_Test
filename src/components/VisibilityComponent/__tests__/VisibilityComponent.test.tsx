// vendors
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';

// components
import { Visibility } from '..';

const mockProps = {
	children: <></>,
	isVisible: false,
};

describe('Visibility component test suit', () => {
	it('should set display style to none', () => {
		render(<Visibility {...mockProps} />);

		const ComponentProps = screen.container.findByType(View).props;

		expect(ComponentProps.style.display).toEqual('none');
	});

	it('should set display style to flex', () => {
		mockProps.isVisible = true;
		render(<Visibility {...mockProps} />);

		const ComponentProps = screen.container.findByType(View).props;

		expect(ComponentProps.style.display).toEqual('flex');
	});
});
