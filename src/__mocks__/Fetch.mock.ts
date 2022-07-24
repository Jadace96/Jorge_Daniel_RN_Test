export const mockFetchSuccess = (response: unknown) => {
	global.fetch = jest.fn().mockImplementation(() =>
		Promise.resolve({
			json: () => response,
		}),
	);
};

export const mockFetchError = (error: unknown) => {
	global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));
};
