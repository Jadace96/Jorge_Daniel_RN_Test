export const mockCharizardData = {
	abilities: [
		{
			ability: {
				name: 'blaze',
				url: 'https://pokeapi.co/api/v2/ability/66/',
			},
			is_hidden: false,
			slot: 1,
		},
		{
			ability: {
				name: 'solar-power',
				url: 'https://pokeapi.co/api/v2/ability/94/',
			},
			is_hidden: true,
			slot: 3,
		},
	],
	base_experience: 267,
	forms: [
		{
			name: 'charizard',
			url: 'https://pokeapi.co/api/v2/pokemon-form/6/',
		},
	],
	game_indices: [
		{
			game_index: 180,
			version: {
				name: 'red',
				url: 'https://pokeapi.co/api/v2/version/1/',
			},
		},
		{
			game_index: 180,
			version: {
				name: 'blue',
				url: 'https://pokeapi.co/api/v2/version/2/',
			},
		},
	],
	height: 17,
	held_items: [],
	id: 6,
	is_default: true,
	location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/6/encounters',
	moves: [
		{
			move: {
				name: 'mega-punch',
				url: 'https://pokeapi.co/api/v2/move/5/',
			},
		},
	],
	name: 'charizard',
	order: 7,
	past_types: [],
	species: {
		name: 'charizard',
		url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
	},
	sprites: {
		back_default:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
		back_shiny:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
		front_default:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
		other: {
			dream_world: {
				front_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
			},
			home: {
				front_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png',
			},
		},
		versions: {
			'generation-i': {},
			'generation-ii': {},
		},
	},
	stats: [
		{
			base_stat: 78,
			effort: 0,
			stat: {
				name: 'hp',
				url: 'https://pokeapi.co/api/v2/stat/1/',
			},
		},
		{
			base_stat: 84,
			effort: 0,
			stat: {
				name: 'attack',
				url: 'https://pokeapi.co/api/v2/stat/2/',
			},
		},
	],
	types: [
		{
			slot: 1,
			type: {
				name: 'fire',
				url: 'https://pokeapi.co/api/v2/type/10/',
			},
		},
		{
			slot: 2,
			type: {
				name: 'flying',
				url: 'https://pokeapi.co/api/v2/type/3/',
			},
		},
	],
	weight: 905,
};

export const mockBulbasaurData = {
	abilities: [
		{
			ability: {
				name: 'overgrow',
				url: 'https://pokeapi.co/api/v2/ability/65/',
			},
			is_hidden: false,
			slot: 1,
		},
		{
			ability: {
				name: 'chlorophyll',
				url: 'https://pokeapi.co/api/v2/ability/34/',
			},
			is_hidden: true,
			slot: 3,
		},
	],
	base_experience: 64,
	forms: [
		{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' },
	],
	game_indices: [
		{
			game_index: 153,
			version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' },
		},
		{
			game_index: 153,
			version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' },
		},
	],
	height: 7,
	held_items: [],
	id: 1,
	is_default: true,
	location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
	moves: [
		{
			move: { name: 'razor-wind', url: 'https://pokeapi.co/api/v2/move/13/' },
		},
	],
	name: 'bulbasaur',
	order: 1,
	past_types: [],
	species: {
		name: 'bulbasaur',
		url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
	},
	sprites: {
		back_default:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
		back_shiny:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
		other: {
			dream_world: {
				front_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
			},
			home: {
				front_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
			},
		},
		versions: {
			'generation-i': {},
			'generation-ii': {},
		},
	},
	stats: [
		{
			base_stat: 45,
			effort: 0,
			stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
		},
		{
			base_stat: 49,
			effort: 0,
			stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
		},
	],
	types: [
		{
			slot: 1,
			type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
		},
		{
			slot: 2,
			type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
		},
	],
	weight: 69,
};

export const mockFetchPokemonsData = [mockCharizardData, mockBulbasaurData];

export const mockPokemonsDataMapped = [
	{
		id: 1,
		name: 'bulbasaur',
		weight: 69,
		types: ['grass', 'poison'],
		movements: ['razor-wind'],
		sprites: [
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
		],
		imgUri:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
	},
	{
		id: 6,
		name: 'charizard',
		weight: 905,
		types: ['fire', 'flying'],
		movements: ['mega-punch'],
		sprites: [
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
		],
		imgUri:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png',
	},
];
