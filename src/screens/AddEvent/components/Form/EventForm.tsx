import React from "react";
import { Formik } from "formik";

const EventForm = ({ initialValues, onSubmit, validationSchema, children }: any) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
			style={{ padding: 10 }}
		>
			{() => <>{children}</>}
		</Formik>
	);
};

export default EventForm;
