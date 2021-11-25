import React, { useState } from "react";
import { Field } from "formik";

import { Header, Map, EventForm, EventFormButton } from "./components";
import { AddEventContainer, ScrollView } from "./AddEvent.styles";
import { EventTypeEnum } from "@/types/types.d";
import { addEventFields, validationSchema } from "./utils/AddEvent.utils";

const AddEvent = () => {
	const [eventType, setEventType] = useState(EventTypeEnum.ALERT);

	return (
		<AddEventContainer>
			<EventForm
				initialValues={{
					eventType: eventType,
					name: "",
					latitude: undefined,
					longitude: undefined,
				}}
				validationSchema={validationSchema[eventType]}
				onSubmit={(values: any) => console.log(values)}
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
