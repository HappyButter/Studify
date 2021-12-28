import React, { useState } from "react";
import { Field } from "formik";

import { Header, Map, EventForm, EventFormButton } from "./components";
import { AddEventContainer, ScrollView } from "./AddEvent.styles";
import { EventTypeEnum } from "@/types/types.d";
import { addEventFields, validationSchema } from "./utils/AddEvent.utils";
import { NewEventData, createEvent } from "@/state/actions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const AddEvent = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const [eventType, setEventType] = useState(EventTypeEnum.ALERT);

	return (
		<AddEventContainer>
			<EventForm
				initialValues={{
					eventType: eventType,
					eventName: "",
					description: "",
					latitude: undefined,
					longitude: undefined,
				}}
				validationSchema={validationSchema[eventType]}
				onSubmit={(values: NewEventData) => {
					dispatch(createEvent(values));

					navigation.navigate(
						"MainView" as never,
						{
							screen: "Map",
						} as never
					);
				}}
			>
				<ScrollView stickyHeaderIndices={[0]}>
					<Header eventType={eventType} setEventType={setEventType} />

					{addEventFields[eventType]}
					<Field name="latitude" component={Map} />

					<EventFormButton title="Submit" />
				</ScrollView>
			</EventForm>
		</AddEventContainer>
	);
};

export default AddEvent;
