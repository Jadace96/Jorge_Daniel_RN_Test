// utils
import { getRandomBackgroundAndBorderColor } from './../../../utils';

// types
import { PokemonDataProps } from '../types';
import { PokemonDataMapped } from '../../../types';

export const pokemonDataMapper = ({
	id,
	name,
	types,
	moves,
	weight,
	sprites,
}: PokemonDataProps): PokemonDataMapped => {
	delete sprites.versions;
	const { other, ...spriteRest } = sprites;
	const mappedData = {
		id,
		name,
		weight,
		types: types?.flatMap(({ type }) => type?.name),
		movements: moves?.flatMap(({ move }) => move?.name),
		sprites: Object.values(spriteRest).filter(sprite =>
			sprite?.includes('.png'),
		),
		imgUri:
			Object.values(other)
				?.flatMap(({ front_default }) => front_default)
				?.find(string => string?.includes('.png')) ||
			'https://www.pngmart.com/files/2/Pokemon-PNG-Pic.png',
	};

	return mappedData;
};
