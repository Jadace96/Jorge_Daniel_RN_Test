// vendors
import React, { ReactElement } from 'react';

// types
type RenderIfProps = {
	condition: boolean;
	component: ReactElement<any, any>;
};

export function RenderIf({ condition, component }: RenderIfProps) {
	return condition ? component : <></>;
}
