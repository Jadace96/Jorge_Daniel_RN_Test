export type GetFilteredValuesByNameDataItem = { [key: string]: any };

export type GetFilteredValuesByName = {
	data: Array<GetFilteredValuesByNameDataItem>;
	keyToFilter?: string;
	valueToFilter: string;
};

export type GetRandomBackgroundAndBorderColor = {
	backgroundColor: string;
	borderColor: string;
};
