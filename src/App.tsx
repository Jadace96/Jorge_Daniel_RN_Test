// vendors
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// navigation
import { Navigation } from './navigation';

function App() {
	return (
		<SafeAreaProvider>
			<StatusBar style="dark" />
			<Navigation />
		</SafeAreaProvider>
	);
}

export default registerRootComponent(App);
