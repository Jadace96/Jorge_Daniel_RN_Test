// types
type NameUrlObjTypes = {
	name: string;
	url: string;
};

export type PokemonDataTypes = {
	abilities: Array<{
		ability: NameUrlObjTypes;
		is_hidden: boolean;
		slot: number;
	}>;
	base_experience: number;
	forms: Array<NameUrlObjTypes>;
	game_indices: Array<{
		game_index: number;
		version: NameUrlObjTypes;
	}>;
	height: number;
	held_items: Array<{}>;
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Array<{
		move: NameUrlObjTypes;
		version_group_details: {
			level_learned_at: number;
			move_learn_method: NameUrlObjTypes;
		};
		version_group: NameUrlObjTypes;
	}>;
	name: string;
	order: 1;
	past_types: Array<{}>;
	species: NameUrlObjTypes;
	sprites: {
		back_default: string;
		back_shiny: string;
		front_default: string;
		front_shiny: string;
		other: {
			dream_world: {
				front_default: string;
			};
			home: {
				front_default: string;
				front_shiny: string;
			};
			'official-artwork': {
				front_default: string;
			};
		};
		versions?: {
			[key: string]: {
				[key: string]: {
					[key: string]: string;
				};
			};
		};
	};
	stats: Array<{ base_stat: number; effort: number }>;
	types: Array<{
		slot: number;
		type: NameUrlObjTypes;
	}>;
	weight: number;
};

export type PokemonDataMappedTypes = {
	id: number;
	name: string;
	imgUri: string;
	weight: number;
	types: Array<string>;
	moves: Array<string>;
	sprites: Array<string>;
};
