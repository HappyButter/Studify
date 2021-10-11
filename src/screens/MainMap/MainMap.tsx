import React, { useContext } from "react";

import { Heading } from "native-base";

import Center from "@/utils/Center";
import { AuthorizedRouteProps } from "@/types/types";

const MainMap: React.FC<AuthorizedRouteProps<"Map">> = ({ navigation }) => {
	return (
		<Center>
			<Heading size="md">
				Map Heeeere
				{"\n"}
				{"\n"}
				{"\n"}
			</Heading>
		</Center>
	);
};

export default MainMap;
