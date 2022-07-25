jest.mock('react-native', () => {
	const rn = jest.requireActual('react-native');
	const spyOn = (method: string) =>
		jest.spyOn(rn.Animated, method).mockReturnValue({
			start: (callback: () => void) => callback(),
		});

	spyOn('loop');
	spyOn('timing');

	return rn;
});

jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useNavigation: () => ({
		goBack: jest.fn(),
		navigate: jest.fn(),
	}),
}));

jest.mock('@react-navigation/elements', () => ({
	...jest.requireActual('@react-navigation/elements'),
	useHeaderHeight: () => 80,
}));
