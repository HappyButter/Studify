import React from "react";
import { NativeBaseProvider } from "native-base";

import { AuthProvider } from "@/providers/Auth";
import Routes from "@/components/Routes";

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<AuthProvider>
			<NativeBaseProvider>
				<Routes />
			</NativeBaseProvider>
		</AuthProvider>
	);
};

export default App;
