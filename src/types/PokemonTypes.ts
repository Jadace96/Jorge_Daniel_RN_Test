// types
export type PokemonDataMapped = {
	id: number;
	name: string;
	imgUri: string;
	weight: number;
	types: Array<string>;
	sprites: Array<string>;
	movements: Array<string>;
};
