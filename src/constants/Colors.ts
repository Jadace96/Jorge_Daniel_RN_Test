const base = {
	red: '#FF0000',
	grey: '#C5CBCF',
	black: '#000000',
	white: '#ffffff',
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
		navigation: '#0089E0',
	},
	box: {
		b: '#76DACE',
		c: '#C0D0DA',
		i: '#FBC098',
		g: '#B6AAFF',
		v: '#F59DAB',
	},
};

const border = {
	primary: base.grey,
	box: {
		b: '#00A99B',
		c: '#7C8895',
		i: '#EDA373',
		g: '#7761EB',
		v: '#EA8798',
	},
};

export const colors = {
	base,
	text,
	alert,
	border,
	background,
};
