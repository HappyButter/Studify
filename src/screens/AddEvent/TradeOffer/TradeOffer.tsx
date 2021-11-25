import React, { Fragment, useState } from "react";
import { Field } from "formik";

import { EventFormField } from "../components";

interface TradeOfferProps {}

const TradeOffer: React.FC<TradeOfferProps> = () => {
	return (
		<Fragment>
			<Field component={EventFormField} name="name" placeholder="Name" multiline />
			<Field component={EventFormField} name="offer" placeholder="You offers" multiline />
			<Field component={EventFormField} name="receive" placeholder="You receives" multiline />
		</Fragment>
	);
};

export default TradeOffer;
