// vendors
import { NavigationContainer } from '@react-navigation/native';

// root
import { RootNavigator } from './Navigator';

export function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}
