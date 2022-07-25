const base = {
	red: '#FF0000',
	grey: '#C5CBCF',
	blue: '#0089E0',
	black: '#000000',
	white: '#ffffff',
	darkGrey: '#9b9d9e',
};

const alert = {
	error: base.red,
};

const text = {
	primary: base.black,
	secondary: base.grey,
};

const background = {
	primary: base.white,
	secondary: base.grey,
	button: {
		navigation: base.blue,
	},
};

const border = {
	primary: base.grey,
};

export const colors = {
	base,
	text,
	alert,
	border,
	background,
};
