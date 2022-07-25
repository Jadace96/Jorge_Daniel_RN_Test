// vendors
import { FlatList, TouchableHighlight } from 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';

// components
import { PokemonList } from '../PokemonList';

// mocks
import { mockPokemonsDataMapped } from '.././../../../../__mocks__/PokemonDataMocks';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useNavigation: () => ({
		goBack: mockGoBack,
		navigate: mockNavigate,
	}),
}));

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

	it('should trigger navigation navigate', () => {
		render(<PokemonList {...mockProps} />);

		const ListItemComponent =
			screen.container.findAllByType(TouchableHighlight)[0];

		fireEvent.press(ListItemComponent);

		expect(mockNavigate).toHaveBeenCalledTimes(1);
	});
});
