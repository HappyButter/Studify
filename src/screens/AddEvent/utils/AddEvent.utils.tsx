import React from "react";

import * as Yup from "yup";
import Alert from "../Alert";
import TradeOffer from "../TradeOffer";
import Happening from "../Happening";
import { EventTypeEnum } from "@/types/types.d";

const alertValidationSchema = Yup.object().shape({
	eventType: Yup.string(),
	name: Yup.string().required("Alert title is required"),
	description: Yup.string().required("Description is required"),
	latitude: Yup.number().required(),
	longitude: Yup.number().required(),
});

const happeningValidationSchema = Yup.object().shape({
	eventType: Yup.string(),
	name: Yup.string().required("Happening title is required"),
	description: Yup.string().required("Description is required"),
	latitude: Yup.number().required(),
	longitude: Yup.number().required(),
});

const tradeOfferValidationSchema = Yup.object().shape({
	eventType: Yup.string(),
	name: Yup.string().required("Trade offer title is required"),
	offer: Yup.string().required(),
	receive: Yup.string().required(),
	latitude: Yup.number().required(),
	longitude: Yup.number().required(),
});

export const validationSchema = {
	[EventTypeEnum.ALERT]: alertValidationSchema,
	[EventTypeEnum.HAPPENING]: happeningValidationSchema,
	[EventTypeEnum.TRADE_OFFER]: tradeOfferValidationSchema,
};

export const addEventFields = {
	[EventTypeEnum.ALERT]: <Alert />,
	[EventTypeEnum.HAPPENING]: <Happening />,
	[EventTypeEnum.TRADE_OFFER]: <TradeOffer />,
};
