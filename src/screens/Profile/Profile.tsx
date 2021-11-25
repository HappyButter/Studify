import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
	ProfileContainer,
	PersonDetails,
	PersonDetailsAvatar,
	PersonDetailsData,
	PersonDetailsText,
	PersonDetailsGoBackArea,
	GoBackButton,
	EventContainer,
} from "./Profile.styles";
import { AuthContext } from "@/providers/Auth";
import { SecondViewRouteProps, User } from "@/types/types";
import { CommonActions } from "@react-navigation/native";

const Profile: React.FC<SecondViewRouteProps<"Profile">> = ({ navigation, route }) => {
	const { userId } = route.params;
	const { user } = useContext(AuthContext);

	const [toDisplayUser, setToDisplayUser] = useState<User>({
		id: -1,
		firstName: "",
		lastName: "",
		email: "",
	});

	useEffect(() => {
		userId ? setToDisplayUser(user) : null; //fetch user data
	}, [userId]);

	return (
		<ProfileContainer>
			<PersonDetails>
				<PersonDetailsAvatar>
					<Ionicons name={"person-circle"} size={100} color={"#fff"} />
				</PersonDetailsAvatar>
				<PersonDetailsData>
					<PersonDetailsText>
						{toDisplayUser?.firstName} {toDisplayUser?.lastName}
					</PersonDetailsText>
					<PersonDetailsText>{toDisplayUser?.email}</PersonDetailsText>
				</PersonDetailsData>
				<PersonDetailsGoBackArea>
					<GoBackButton onPress={() => navigation.goBack()}>
						<View>
							<Ionicons name={"arrow-undo-sharp"} size={20} color={"#fff"} />
						</View>
					</GoBackButton>
				</PersonDetailsGoBackArea>
			</PersonDetails>
			<EventContainer></EventContainer>
			<EventContainer></EventContainer>
			<EventContainer></EventContainer>
			<EventContainer></EventContainer>
			<EventContainer></EventContainer>
		</ProfileContainer>
	);
};

export default Profile;
