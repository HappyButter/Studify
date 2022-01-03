import React from "react";
import { View } from "react-native";

interface CenterProps {}

const Center: React.FC<CenterProps> = ({ children }) => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#1c1c1c",
			}}
		>
			{children}
		</View>
	);
};

export default Center;
