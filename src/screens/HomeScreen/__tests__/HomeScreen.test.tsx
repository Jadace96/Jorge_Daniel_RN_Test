// vendors
import { render, screen } from '@testing-library/react-native';

// screens
import { Home } from '../HomeScreen';

// components
import { PokemonList, TouchableMessage } from '../components';
import { SearchBar, Loader } from '../../../components';

// hooks
import * as paginatedPokemonsHook from '../hooks/usePaginatedPokemons';

// mocks
import { mockPokemonsDataMapped } from '../../../__mocks__/PokemonDataMocks';

const mockUsePaginatedPokemonsData = {
	paginatedPokemons: [],
	getPaginatedPokemons: jest.fn(),
	isPaginatedPokemonsError: false,
	isLoadingPaginatedPokemons: false,
	isPaginatedPokemonsSuccess: false,
};

const spyUsePaginatedPokemons = () =>
	jest.spyOn(paginatedPokemonsHook, 'usePaginatedPokemons').mockReturnValue({
		...mockUsePaginatedPokemonsData,
	});

describe('Home screen test suit', () => {
	it('should render component correctly whit initial data', () => {
		spyUsePaginatedPokemons();

		render(<Home />);

		const LoaderComponent = screen.container.findByType(Loader);
		const SearchBarComponent = screen.container.findByType(SearchBar);
		const PokemonListComponent = screen.container.findByType(PokemonList);
		const TouchableMessageComponent =
			screen.container.findByType(TouchableMessage);

		expect(SearchBarComponent.props.value).toEqual('');
		expect(PokemonListComponent.props.data).toEqual([]);
		expect(LoaderComponent.props.isVisible).toEqual(false);
		expect(TouchableMessageComponent.props.isVisible).toEqual(false);
	});
});
