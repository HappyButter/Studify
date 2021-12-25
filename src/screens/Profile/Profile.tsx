import React, { useContext, useEffect, useState } from "react";
import {
	FlatList,
	SafeAreaView,
	View,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
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
	CustomFlatList,
} from "./Profile.styles";
import { AuthContext } from "@/providers/Auth";
import { SecondViewRouteProps, User } from "@/types/types";
import { CommonActions } from "@react-navigation/native";

const mockData = [
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a761",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a771",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a762",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a772",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a763",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a764",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a765",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a766",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a767",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a768",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a769",
		hasUserVoted: true,
	},
	{
		eventType: "Happening",
		description: "xyz",
		authorId: "5",
		authorName: "ROMAN",
		eventName: "fancy",
		latitude: 50.073658,
		longitude: 14.41854,
		eventTemperature: 0,
		creationDate: 1639697006214,
		id: "46d4fb76-cdd3-46e9-ae7b-67b1f809a70",
		hasUserVoted: true,
	},
];

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

			<SafeAreaView style={styles.container} />
			<CustomFlatList
				data={mockData}
				renderItem={({ item }) => <EventContainer style={styles.item} />}
				keyExtractor={(item) => item.id}
			/>
		</ProfileContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		padding: 50,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10,
	},
	title: {
		fontSize: 32,
	},
});

export default Profile;
