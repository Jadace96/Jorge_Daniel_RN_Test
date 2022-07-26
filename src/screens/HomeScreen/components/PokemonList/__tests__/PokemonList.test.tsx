// vendors
import { FlatList, TouchableHighlight } from 'react-native';
import {
	fireEvent,
	render,
	screen,
	waitFor,
} from '@testing-library/react-native';

// components
import { PokemonList } from '../PokemonList';
import { PokemonDetailsModal } from '../../../../../components';

// mocks
import { mockPokemonsDataMapped } from '.././../../../../__mocks__/PokemonDataMocks';

const mockProps = {
	onLoadMore: jest.fn(),
	shouldEnableLoadMore: false,
	data: mockPokemonsDataMapped,
};

describe('PokemonList test suit', () => {
	it(`should render ${mockProps.data.length} items`, () => {
		render(<PokemonList {...mockProps} />);

		const ListItems = screen.container.findAllByType(TouchableHighlight);

		expect(ListItems).toHaveLength(mockProps.data.length);
	});

	it('should not trigger onLoadMore prop', () => {
		render(<PokemonList {...mockProps} />);

		const ListComponent = screen.container.findByType(FlatList);

		ListComponent.props.onEndReached();

		expect(mockProps.onLoadMore).not.toHaveBeenCalled();
	});

	it('should trigger onLoadMore prop', () => {
		mockProps.shouldEnableLoadMore = true;
		render(<PokemonList {...mockProps} />);

		const ListComponent = screen.container.findByType(FlatList);

		ListComponent.props.onEndReached();

		expect(mockProps.onLoadMore).toHaveBeenCalledTimes(1);
	});

	it('should not show PokemonDetailsModal component', () => {
		render(<PokemonList {...mockProps} />);

		const PokemonDetailsModalComponent =
			screen.container.findByType(PokemonDetailsModal);

		expect(PokemonDetailsModalComponent.props.visible).toBeFalsy();
	});

	it('should show PokemonDetailsModal and then close it.', () => {
		render(<PokemonList {...mockProps} />);

		const ListItemComponent =
			screen.container.findAllByType(TouchableHighlight)[0];

		fireEvent.press(ListItemComponent);

		const PokemonDetailsModalComponent =
			screen.container.findByType(PokemonDetailsModal);

		expect(PokemonDetailsModalComponent.props.isVisible).toBe(true);
		expect(PokemonDetailsModalComponent.props.data).toEqual(mockProps.data[0]);

		waitFor(() => PokemonDetailsModalComponent.props.onClose());

		expect(PokemonDetailsModalComponent.props.data).toEqual({});
		expect(PokemonDetailsModalComponent.props.isVisible).toBe(false);
	});
});
