// vendors
import { create, act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

// screens
import { Home } from '../HomeScreen';

// components
import { SearchBar, Loader } from '../../../components';

// mocks
import { mockPokemonsDataMapped } from '../../../__mocks__/PokemonDataMocks';

let mockGetPaginatedPokemons = jest.fn();
let mockIsPaginatedPokemonsError = false;
let mockIsLoadingPaginatedPokemons = false;
let mockIsPaginatedPokemonsSuccess = false;
let mockPaginatedPokemons = [...mockPokemonsDataMapped];

jest.mock('../hooks/usePaginatedPokemons', () => ({
	usePaginatedPokemons: jest.fn().mockReturnValue({
		paginatedPokemons: mockPaginatedPokemons,
		getPaginatedPokemons: mockGetPaginatedPokemons,
		isPaginatedPokemonsError: mockIsPaginatedPokemonsError,
		isLoadingPaginatedPokemons: mockIsLoadingPaginatedPokemons,
		isPaginatedPokemonsSuccess: mockIsPaginatedPokemonsSuccess,
	}),
}));

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useNavigation: () => ({
		navigate: mockNavigate,
	}),
}));

describe('Home screen test suit', () => {
	it('should render loader component correctly', () => {
		mockIsLoadingPaginatedPokemons = true;
		const HomeScreen = create(<Home />).root;

		const LoaderComponent = HomeScreen.findByType(Loader);

		expect(LoaderComponent).toBeDefined();
	});
	// it('should render loader component correctly', () => {
	// 	render(<Home />);

	// 	const SearchInput = screen.getByPlaceholderText('Search');

	// 	console.log(SearchInput.props);
	// 	// expect(screen).toMatchSnapshot();
	// });

	// it('should render loader component correctly', () => {
	// 	const HomeScreen = create(<Home />).root;

	// 	const SearchInput = HomeScreen.findByType(SearchBar);

	// 	expect(SearchInput).toBeDefined();
	// });
});
