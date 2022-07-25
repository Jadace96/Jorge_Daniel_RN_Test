// vendors
import { render, screen } from '@testing-library/react-native';

// screen
import { PokemonDetails } from '..';

// components
import { PokemonBox } from '../../../components';

// mocks
import { mockPokemonsDataMapped } from '../../../__mocks__/PokemonDataMocks';

const mockProps = {
	route: {
		params: {
			pokemonDetails: mockPokemonsDataMapped[0],
		},
	},
};

describe('PokemonDetails screen test suit', () => {
	it('should render correctly and pass pokemon data to PokemonBox', () => {
		render(<PokemonDetails {...mockProps} />);

		const PokemonBoxComponent = screen.container.findByType(PokemonBox);

		expect(PokemonBoxComponent.props).toEqual({
			...mockPokemonsDataMapped[0],
			showFullDetails: true,
		});
	});
});
