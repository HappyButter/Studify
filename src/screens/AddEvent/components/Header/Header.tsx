import React from "react";
import ButtonToggleGroup from "react-native-button-toggle-group";

import { EventType, EventTypeEnum } from "@/types/types.d";
import { HeaderContainer, HeaderText } from "./Header.styles";
import { useFormikContext } from "formik";

interface HeaderProps {
	eventType: EventType;
	setEventType: (e: any) => void;
}

const Header: React.FC<HeaderProps> = ({ eventType, setEventType }) => {
	const { setFieldValue } = useFormikContext();

	const handleTypeChange = (type: EventType) => {
		setEventType(type);
		setFieldValue("eventType", type);
	};

	return (
		<HeaderContainer>
			<HeaderText>Add Event!</HeaderText>
			{/* <ButtonToggleGroup
				highlightBackgroundColor={"#D37D6B"}
				highlightTextColor={"#4E3B4B"}
				inactiveBackgroundColor={"transparent"}
				inactiveTextColor={"#4E3B4B"}
				values={[EventTypeEnum.ALERT, EventTypeEnum.HAPPENING, EventTypeEnum.TRADE_OFFER]}
				value={eventType}
				// onSelect passes string instead of EventTypeEnum. However values are given from EventTypeEnum.
				// @ts-ignore
				onSelect={(e) => handleTypeChange(e)}
			/> */}
		</HeaderContainer>
	);
};

export default Header;
