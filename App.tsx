import React from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

import { AuthProvider } from "@/providers/Auth";
import { Routes } from "@/components";
import { configureStore } from "@/state/store";

const store = configureStore();

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<AuthProvider>
			<Provider store={store}>
				<SafeAreaView style={{ flex: 1, backgroundColor: "#925867" }}>
					<NativeBaseProvider>
						<Routes />
						<Toast bottomOffset={20} />
					</NativeBaseProvider>
				</SafeAreaView>
			</Provider>
		</AuthProvider>
	);
};

export default App;
