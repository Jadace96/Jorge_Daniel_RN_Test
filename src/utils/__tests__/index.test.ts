// utils
import {
	getRange,
	darkenHexColor,
	getFilteredValues,
	capitalizeFirstLetter,
	getRandomLightHexColor,
	getRandomBackgroundAndBorderColor,
} from '../index';

// constants
const hexadecimalRegExp = /^#([0-9a-f]{3}){1,2}$/i;

// mocks
import { mockPokemonDataMapped } from '../../__mocks__/pokemonDataMocks';

describe('Utils test suit', () => {
	it('should return random hexadecimal colors', () => {
		const expectedColor1 = getRandomLightHexColor();
		const expectedColor2 = getRandomLightHexColor();

		expect(expectedColor1).toMatch(hexadecimalRegExp);
		expect(expectedColor2).toMatch(hexadecimalRegExp);
		expect(expectedColor1).not.toEqual(expectedColor2);
	});

	it('should darken a hexadecimal color', () => {
		const darkenColor = darkenHexColor('#3388FF');

		expect(darkenColor).toEqual('#0b60d7');
	});

	it('should return and object with backgroundColor and borderColor as hexadecimal', () => {
		const { borderColor, backgroundColor } =
			getRandomBackgroundAndBorderColor();

		expect(borderColor).toMatch(hexadecimalRegExp);
		expect(backgroundColor).toMatch(hexadecimalRegExp);
	});

	it('should capitalize first letter', () => {
		const wordWithFirstLetterCapitalized = capitalizeFirstLetter('mockWord');

		expect(wordWithFirstLetterCapitalized).toEqual('MockWord');
	});

	it('should return default range from 1 to 20', () => {
		const defaultRange = getRange();

		expect(defaultRange.at(0)).toEqual(1);
		expect(defaultRange.at(-1)).toEqual(20);
	});

	it('should return custom range from 30 to 80', () => {
		const customRange = getRange(30, 80);

		expect(customRange.at(0)).toEqual(30);
		expect(customRange.at(-1)).toEqual(80);
	});

	it('should return custom range from -50 to 50', () => {
		const customRange = getRange(-50, 50);

		expect(customRange.at(0)).toEqual(-50);
		expect(customRange.at(-1)).toEqual(50);
	});

	it('should return and empty array when valueToFilter is empty ', () => {
		const filteredData = getFilteredValues({
			data: mockPokemonDataMapped,
			valueToFilter: '',
		});

		expect(filteredData).toEqual([]);
	});

	it('should return and empty array when data is empty', () => {
		const filteredData = getFilteredValues({
			data: [],
			valueToFilter: 'cha',
		});

		expect(filteredData).toEqual([]);
	});

	it('should return filtered pokemons by name', () => {
		const filteredData = getFilteredValues({
			data: mockPokemonDataMapped,
			valueToFilter: 'cha',
		});

		expect(filteredData).toHaveLength(3);
	});

	it('should return an empty array when no matches are found', () => {
		const filteredData = getFilteredValues({
			data: mockPokemonDataMapped,
			valueToFilter: 'chachacha',
		});

		expect(filteredData).toEqual([]);
	});
});
