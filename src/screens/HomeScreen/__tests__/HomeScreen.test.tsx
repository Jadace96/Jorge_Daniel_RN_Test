// vendors
import { fireEvent, render, screen } from '@testing-library/react-native';

// screens
import { Home } from '../HomeScreen';

// components
import { SearchBar, Loader } from '../../../components';
import { PokemonList, TouchableMessage } from '../components';

// hooks
import * as paginatedPokemonsHook from '../hooks/usePaginatedPokemons';

// types
import { UsePaginatedPokemonsData } from '../hooks/usePaginatedPokemons';

// mocks
import { mockPokemonsDataMapped } from '../../../__mocks__/PokemonDataMocks';
import { FlatList } from 'react-native';

const mockGetPaginatedPokemons = jest.fn();
const spyUsePaginatedPokemons = (
	dataToReturn?: Partial<UsePaginatedPokemonsData>,
) => {
	jest.spyOn(paginatedPokemonsHook, 'usePaginatedPokemons').mockReturnValue({
		paginatedPokemons: [],
		isPaginatedPokemonsError: false,
		isLoadingPaginatedPokemons: false,
		isPaginatedPokemonsSuccess: false,
		getPaginatedPokemons: mockGetPaginatedPokemons,
		...dataToReturn,
	});
};

describe('Home screen test suit', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render component correctly whit initial data', () => {
		spyUsePaginatedPokemons();

		render(<Home />);

		const LoaderComponent = screen.container.findByType(Loader);
		const SearchBarComponent = screen.container.findByType(SearchBar);
		const PokemonListComponent = screen.container.findByType(PokemonList);
		const EmptyMessageComponent = screen.container.findByType(TouchableMessage);

		expect(SearchBarComponent.props.value).toEqual('');
		expect(PokemonListComponent.props.data).toEqual([]);
		expect(LoaderComponent.props.isVisible).toEqual(false);
		expect(EmptyMessageComponent.props.isVisible).toEqual(false);
	});

	it('should display loader component', () => {
		spyUsePaginatedPokemons({ isLoadingPaginatedPokemons: true });

		render(<Home />);

		const LoaderComponent = screen.container.findByType(Loader);

		expect(LoaderComponent.props.isVisible).toEqual(true);
	});

	it('should display empty message when isPaginatedPokemonsError is true', () => {
		spyUsePaginatedPokemons({ isPaginatedPokemonsError: true });

		render(<Home />);

		const EmptyMessage = screen.container.findByType(TouchableMessage);

		expect(EmptyMessage.props.isVisible).toEqual(true);
		expect(EmptyMessage.props.message).toMatch(
			/Oops, looks like all the pokemon are resting!/i,
		);
	});

	it('should display empty message when paginatedPokemons is empty', () => {
		spyUsePaginatedPokemons({ isPaginatedPokemonsSuccess: true });

		render(<Home />);

		const EmptyMessage = screen.container.findByType(TouchableMessage);

		expect(EmptyMessage.props.isVisible).toEqual(true);
		expect(EmptyMessage.props.message).toMatch(
			/Oops, looks like all the pokemon are resting!/i,
		);
	});

	it('should display empty message when there are no matches in a search', () => {
		spyUsePaginatedPokemons({ isPaginatedPokemonsSuccess: true });

		render(<Home />);

		const SearchBarComponent = screen.container.findByType(SearchBar);
		const EmptyMessage = screen.container.findByType(TouchableMessage);
		const PokemonListComponent = screen.container.findByType(PokemonList);

		fireEvent.changeText(SearchBarComponent, 'chachacha');

		expect(EmptyMessage.props.isVisible).toEqual(true);
		expect(PokemonListComponent.props.data).toEqual([]);
		expect(EmptyMessage.props.message).toMatch(/Pokemon not found!/i);
	});

	it('should display PokemonListComponent whit data', () => {
		spyUsePaginatedPokemons({ paginatedPokemons: mockPokemonsDataMapped });

		render(<Home />);

		const PokemonListComponent = screen.container.findByType(PokemonList);

		expect(PokemonListComponent.props.data).toEqual(mockPokemonsDataMapped);
	});

	it('should display PokemonListComponent whit filtered data', () => {
		spyUsePaginatedPokemons({ paginatedPokemons: mockPokemonsDataMapped });

		render(<Home />);

		const SearchBarComponent = screen.container.findByType(SearchBar);
		fireEvent.changeText(SearchBarComponent, 'cha');

		const PokemonListComponent = screen.container.findByType(PokemonList);

		expect(PokemonListComponent.props.data).toEqual([
			mockPokemonsDataMapped[1],
		]);
	});

	it('should trigger getPaginatedPokemons', () => {
		spyUsePaginatedPokemons({ paginatedPokemons: mockPokemonsDataMapped });

		render(<Home />);

		const PokemonListComponent = screen.container
			.findByType(PokemonList)
			.findByType(FlatList);
		PokemonListComponent.props.onEndReached();

		expect(mockGetPaginatedPokemons).toHaveBeenCalledTimes(1);
	});

	it('should not trigger getPaginatedPokemons', () => {
		spyUsePaginatedPokemons({ paginatedPokemons: mockPokemonsDataMapped });

		render(<Home />);

		const SearchBarComponent = screen.container.findByType(SearchBar);
		fireEvent.changeText(SearchBarComponent, 'cha');

		const PokemonListComponent = screen.container
			.findByType(PokemonList)
			.findByType(FlatList);

		PokemonListComponent.props.onEndReached();

		expect(mockGetPaginatedPokemons).not.toHaveBeenCalled();
	});

	it('should clear search input', () => {
		spyUsePaginatedPokemons({
			paginatedPokemons: mockPokemonsDataMapped,
		});

		render(<Home />);

		const SearchBarComponent = screen.container.findByType(SearchBar);
		fireEvent.changeText(SearchBarComponent, 'cha');

		expect(SearchBarComponent.props.value).toEqual('cha');

		const EmptyMessage = screen.container.findByType(TouchableMessage);
		fireEvent.press(EmptyMessage);

		expect(SearchBarComponent.props.value).toEqual('');
	});
});
