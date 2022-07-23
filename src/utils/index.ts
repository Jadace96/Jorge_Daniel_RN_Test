// types
import * as types from './Types';

export * from './Types';

export const getRandomLightHexColor = (): string => {
	let letters = 'BCDEF'.split('');
	let lightColor = '#';
	for (let i = 0; i < 6; i++) {
		lightColor += letters[Math.floor(Math.random() * letters.length)];
	}

	return lightColor;
};

export const darkenHexColor = (hexColor: string, amount = -40): string => {
	let darkenColor = '#';

	darkenColor += hexColor
		.replace(/^#/, '')
		.replace(/../g, hexColor =>
			(
				'0' +
				Math.min(255, Math.max(0, parseInt(hexColor, 16) + amount)).toString(16)
			).substr(-2),
		);

	return darkenColor;
};

export const getRandomBackgroundAndBorderColor =
	(): types.GetRandomBackgroundAndBorderColor => {
		const bgHexColor = getRandomLightHexColor();

		return {
			backgroundColor: bgHexColor,
			borderColor: darkenHexColor(bgHexColor),
		};
	};

export const capitalizeFirstLetter = (word: string): string =>
	word.charAt(0).toUpperCase() + word.slice(1);

export const getRange = ({
	start = 0,
	end = start + 19,
	interval = 0,
}: types.GetRange): Array<number> => {
	let numberArray = [];
	for (let i = start; i <= end; i++) {
		numberArray.push(i);
		i += interval;
	}

	return numberArray;
};

export const getFilteredValues = ({
	data,
	valueToFilter,
	keyToFilter = 'name',
}: types.GetFilteredValuesByName):
	| Array<types.GetFilteredValuesByNameDataItem>
	| [] => {
	if (valueToFilter === '') return [];

	const filteredData = data?.filter(
		(item: types.GetFilteredValuesByNameDataItem) =>
			new RegExp(valueToFilter, 'i').test(item[keyToFilter]),
	);

	return filteredData;
};
