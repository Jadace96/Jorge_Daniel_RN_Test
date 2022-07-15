// types
import { PokemonDataTypes, PokemonDataMappedTypes } from '../types';

export const pokemonDataMapper = ({
	id,
	name,
	types,
	moves,
	weight,
	sprites,
}: PokemonDataTypes): PokemonDataMappedTypes => {
	delete sprites.versions;
	const { other, ...spriteRest } = sprites;
	const mappedData: PokemonDataMappedTypes = {
		id,
		name,
		weight,
		types: types?.flatMap(({ type }) => type?.name),
		moves: moves?.flatMap(({ move }) => move?.name),
		sprites: Object.values(spriteRest).filter(sprite => sprite),
		imgUri:
			Object.values(other)
				?.flatMap(({ front_default }) => front_default)
				?.find(string => string.includes('.png')) ||
			'https://www.pngmart.com/files/2/Pokemon-PNG-Pic.png',
	};

	return mappedData;
};
