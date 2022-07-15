export const getFirstString = (strings: Array<string>) =>
	strings.find(string => typeof string === 'string');

export const getRandomLightHexColor = () => {
	let letters = 'BCDEF'.split('');
	let lightColor = '#';
	for (let i = 0; i < 6; i++) {
		lightColor += letters[Math.floor(Math.random() * letters.length)];
	}

	return lightColor;
};

export const darkenHexColor = (hexColor: string, amount = -40) => {
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

export const getRandomBackgroundAndBorderColor = () => {
	const bgHexColor = getRandomLightHexColor();

	return {
		backgroundColor: bgHexColor,
		borderColor: darkenHexColor(bgHexColor),
	};
};

export const capitalizeFirstLetter = (word: string) =>
	word.charAt(0).toUpperCase() + word.slice(1);

export const debounce = <F extends (...args: any[]) => any>(
	func: F,
	waitFor: number = 500,
) => {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	const debounced = (...args: Parameters<F>) => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(() => func(...args), waitFor);
	};

	return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const getRange = (start = 0, end = start + 19, interval = 0) => {
	let arr = [];
	interval = interval > 0 ? interval - 1 : 0;
	for (let i = start; i <= end; i++) {
		arr.push(i);
		i += interval;
	}

	return arr;
};

export const getFilteredValuesByName = (
	data: Array<{ [key: string]: unknown }>,
	valueToFilter: string,
): any => {
	let filteredData: { [key: string]: unknown }[] = [];
	if (valueToFilter?.length > 0) {
		const pattern = new RegExp(valueToFilter, 'i');
		filteredData = data?.filter((item: any) => pattern.test(item?.name));
	}

	return valueToFilter?.length > 0 ? filteredData : [];
};
