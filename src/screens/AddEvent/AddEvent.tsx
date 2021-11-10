import React, { useState } from "react";
import { Text } from "react-native";
import { Field } from "formik";
import * as Yup from "yup";

import { Header, Map, EventForm, EventFormButton, EventFormField } from "./components";
import { AddEventContainer, ScrollView } from "./AddEvent.styles";
import { EventType, EventTypeEnum } from "@/types/types.d";
import { addEventFields, validationSchema } from "./utils/AddEvent.utils";

const AddEvent = () => {
	const [eventType, setEventType] = useState(EventTypeEnum.ALERT);

	return (
		<AddEventContainer>
			<EventForm
				initialValues={{
					eventType: eventType,
					name: "",
					latitude: 50.073658,
					longitude: 14.41854,
				}}
				validationSchema={validationSchema[eventType]}
				onSubmit={(values: any) => console.log(values)}
			>
				<ScrollView stickyHeaderIndices={[0]}>
					<Header eventType={eventType} setEventType={setEventType} />

					{addEventFields[eventType]}
					<Field component={Map} />

					<EventFormButton title="Submit" />
				</ScrollView>
			</EventForm>
		</AddEventContainer>
	);
};

export default AddEvent;
