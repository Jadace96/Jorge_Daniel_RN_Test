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
		const hexColor = getRandomLightHexColor();

		return {
			backgroundColor: hexColor,
			borderColor: darkenHexColor(hexColor),
		};
	};

export const capitalizeFirstLetter = (word: string): string =>
	word.charAt(0).toUpperCase() + word.slice(1);

export const getRange = (start = 1, end = start + 19): Array<number> =>
	[...Array(end - start + 1).keys()].map(key => key + start);

export const getFilteredValues = ({
	data,
	valueToFilter,
	keyToFilter = 'name',
}: types.GetFilteredValuesByName): Array<types.GetFilteredValuesByNameDataItem> | [] => {
	if (data?.length === 0 || valueToFilter === '') return [];

	const filteredData = data?.filter(
		(item: types.GetFilteredValuesByNameDataItem) =>
			new RegExp(valueToFilter, 'i').test(item[keyToFilter]),
	);

	return filteredData;
};
