import React, { useState } from "react";
import { Text } from "react-native";
import { Field } from "formik";
import * as Yup from "yup";

import { Header, Map, EventForm, EventFormButton, EventFormField } from "./components";
import { AddEventContainer, ScrollView } from "./AddEvent.styles";
import { EventType, EventTypeEnum } from "@/types/types.d";

// const validationSchemaCanon = Yup.object().shape({
// 	name: Yup.string().required("Name is required").label("Name"),
// 	email: Yup.string()
// 		.email("Please enter valid email")
// 		.required("Email is required")
// 		.label("Email"),
// 	password: Yup.string()
// 		.matches(/\w*[a-z]\w*/, "Password must have a small letter")
// 		.matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
// 		.matches(/\d/, "Password must have a number")
// 		.min(8, ({ min }) => `Password must be at least ${min} characters`)
// 		.required("Password is required")
// 		.label("Password"),
// 	confirmPassword: Yup.string()
// 		.oneOf([Yup.ref("password")], "Passwords do not match")
// 		.required("Confirm password is required")
// 		.label("Confirm Password"),
// });

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Event name is required").label("Name"),
	latitude: Yup.number(),
	longitude: Yup.number(),
});

const AddEvent = () => {
	const [eventType, setEventType] = useState(EventTypeEnum.ALERT);

	return (
		<AddEventContainer>
			<EventForm
				initialValues={{
					name: "",
					latitude: 50.073658,
					longitude: 14.41854,
				}}
				validationSchema={validationSchema}
				onSubmit={(values: any) => console.log(values)}
			>
				<ScrollView stickyHeaderIndices={[0]}>
					<Header eventType={eventType} setEventType={setEventType} />

					<Field component={EventFormField} name="name" placeholder="Name" multiline />
					<Field component={Map} />

					<EventFormButton title="Submit" />
				</ScrollView>
			</EventForm>
		</AddEventContainer>
	);
};

export default AddEvent;
