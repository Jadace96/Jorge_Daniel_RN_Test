// vendors
import React, { ReactElement } from 'react';

// types
type RenderIfProps = {
	condition: boolean;
	component: ReactElement<any, any>;
	elseComponent?: ReactElement<any, any>;
};

export function RenderIf({
	condition,
	component,
	elseComponent = <></>,
}: RenderIfProps) {
	if (condition) {
		return component;
	}
	return elseComponent;
}
