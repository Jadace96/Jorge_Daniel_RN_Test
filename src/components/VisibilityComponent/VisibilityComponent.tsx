// vendors
import React, { ReactElement } from 'react';
import { View } from 'react-native';

// types
type VisibilityProps = {
	styles?: Object;
	isVisible: boolean;
	children: ReactElement<any, any>;
};

export function Visibility({ isVisible, children, styles }: VisibilityProps) {
	return (
		<View style={{ ...styles, display: isVisible ? 'flex' : 'none' }}>
			{children}
		</View>
	);
}
