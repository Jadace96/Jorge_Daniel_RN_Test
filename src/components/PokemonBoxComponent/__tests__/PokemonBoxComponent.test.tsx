// vendors
import { Image, TouchableHighlight } from 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';

// components
import { PokemonBox } from '..';

// mocks
import { mockPokemonsDataMapped } from '../../../__mocks__/PokemonDataMocks';

const mockPokemonData = mockPokemonsDataMapped[1];
const mockProps = {
	showFullDetails: true,
	pokemonData: mockPokemonData,
};

describe('PokemonBox component test suit', () => {
	it('should update main image', () => {
		render(<PokemonBox {...mockProps} />);

		const MainImageUri =
			screen.container.findAllByType(Image)[0].props.source.uri;

		expect(MainImageUri).toEqual(mockPokemonData.imgUri);

		const TouchableSpriteImage =
			screen.container.findAllByType(TouchableHighlight)[1];

		fireEvent.press(TouchableSpriteImage);

		const MainImageUriUpdated =
			screen.container.findAllByType(Image)[0].props.source.uri;
		expect(MainImageUriUpdated).toEqual(mockPokemonData.sprites[0]);
	});
});
