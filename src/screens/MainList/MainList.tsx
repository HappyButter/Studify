import React from "react";

import { Heading } from "native-base";

import Center from "@/utils/Center";
import { AuthorizedRouteProps } from "@/types/types";

const MainList: React.FC<AuthorizedRouteProps<"List">> = ({ navigation }) => {
	return (
		<Center>
			<Heading>List</Heading>
		</Center>
	);
};

export default MainList;
