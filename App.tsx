import React from "react";
import { NativeBaseProvider } from "native-base";

import { AuthProvider } from "@/providers/Auth";
import Routes from "@/components/Routes";
import AddEvent from "@/screens/AddEvent";
import { SafeAreaView } from "react-native-safe-area-context";

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<AuthProvider>
			{/* <SafeAreaView> */}
			<NativeBaseProvider>
				<AddEvent />
			</NativeBaseProvider>
			{/* </SafeAreaView> */}
			{/* <NativeBaseProvider>
				<Routes />
			</NativeBaseProvider> */}
		</AuthProvider>
	);
};

export default App;
