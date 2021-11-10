import React, { Fragment, useState } from "react";
import { Text } from "react-native";
import { Field } from "formik";

import { Map, EventFormField } from "../components";

interface AlertProps {}

const Alert: React.FC<AlertProps> = () => {
	return (
		<Fragment>
			<Field component={EventFormField} name="name" placeholder="Name" multiline />
			<Field component={EventFormField} name="description" placeholder="Description..." multiline />
		</Fragment>
	);
};

export default Alert;
