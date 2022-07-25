// types
type NameUrlObj = {
	name: string;
	url: string;
};

export type PokemonDataProps = {
	abilities: Array<{
		ability: NameUrlObj;
		is_hidden: boolean;
		slot: number;
	}>;
	base_experience: number;
	forms: Array<NameUrlObj>;
	game_indices: Array<{
		game_index: number;
		version: NameUrlObj;
	}>;
	height: number;
	held_items: Array<{}>;
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Array<{
		move: NameUrlObj;
		version_group_details?: {
			level_learned_at: number;
			move_learn_method: NameUrlObj;
		};
		version_group?: NameUrlObj;
	}>;
	name: string;
	order: number;
	past_types: Array<{}>;
	species: NameUrlObj;
	sprites: {
		back_default: string;
		back_shiny: string;
		front_default: string;
		other: {
			dream_world: {
				front_default: string;
			};
			home: {
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
		type: NameUrlObj;
	}>;
	weight: number;
};
