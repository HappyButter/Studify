import React, { Fragment, useState } from "react";
import { Field } from "formik";

import { EventFormField } from "../components";

interface TradeOfferProps {}

const TradeOffer: React.FC<TradeOfferProps> = () => {
	return (
		<Fragment>
			<Field component={EventFormField} name="eventName" placeholder="Name" multiline />
			<Field component={EventFormField} name="offer" placeholder="You offers" multiline />
			<Field component={EventFormField} name="receive" placeholder="You receives" multiline />
			<Field component={EventFormField} name="description" placeholder="Description..." multiline />
		</Fragment>
	);
};

export default TradeOffer;
