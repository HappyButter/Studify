import React from "react";
import { NativeBaseProvider } from "native-base";

import { AuthProvider } from "@/providers/Auth";
import Routes from "@/components/Routes";
import { SafeAreaView } from "react-native-safe-area-context";

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<AuthProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: "#925867" }}>
				<NativeBaseProvider>
					<Routes />
				</NativeBaseProvider>
			</SafeAreaView>
		</AuthProvider>
	);
};

export default App;
