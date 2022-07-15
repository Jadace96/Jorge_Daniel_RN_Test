// vendors
import React, { ReactElement } from 'react';

// types
type RenderIfPropTypes = {
	condition: boolean;
	component: ReactElement<any, any>;
	elseComponent?: ReactElement<any, any>;
};

export function RenderIf({
	condition,
	component,
	elseComponent = <></>,
}: RenderIfPropTypes) {
	if (condition) {
		return component;
	}
	return elseComponent;
}
