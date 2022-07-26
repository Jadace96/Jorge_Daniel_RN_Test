// vendors
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { fireEvent, render, screen } from '@testing-library/react-native';

// components
import { PokemonDetailsModal } from '..';

// mocks
import { mockPokemonsDataMapped } from '../../../__mocks__/PokemonDataMocks';
import { PokemonBox } from '../../PokemonBoxComponent';

const mockProps = {
	isVisible: false,
	onClose: jest.fn(),
	data: mockPokemonsDataMapped[0],
};

describe('PokemonDetailsModal test suit', () => {
	it('should not show the component', () => {
		render(<PokemonDetailsModal {...mockProps} />);

		const ModalComponent = screen.container.findByType(Modal);

		expect(ModalComponent.props.visible).toEqual(false);
	});

	it('should show the component and trigger onClose prop', () => {
		mockProps.isVisible = true;
		render(<PokemonDetailsModal {...mockProps} />);

		const ModalComponent = screen.container.findByType(Modal);
		const CloseIcon = screen.container.findByType(AntDesign);

		fireEvent.press(CloseIcon);

		expect(ModalComponent.props.visible).toEqual(true);
		expect(mockProps.onClose).toHaveBeenCalledTimes(1);
	});

	it('should render PokemonBox with data', () => {
		mockProps.isVisible = true;
		render(<PokemonDetailsModal {...mockProps} />);

		const PokemonBoxComponent = screen.container.findByType(PokemonBox);

		expect(PokemonBoxComponent.props.pokemonData).toEqual(mockProps.data);
	});
});
