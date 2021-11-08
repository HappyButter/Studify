import React from "react";
import ButtonToggleGroup from "react-native-button-toggle-group";

import { EventType, EventTypeEnum } from "@/types/types.d";
import { HeaderContainer, HeaderText } from "./Header.styles";

interface HeaderProps {
	eventType: EventType;
	setEventType: (e: any) => void;
}

const Header: React.FC<HeaderProps> = ({ eventType, setEventType }) => {
	return (
		<HeaderContainer>
			<HeaderText>Add Event!</HeaderText>
			<ButtonToggleGroup
				highlightBackgroundColor={"blue"}
				highlightTextColor={"white"}
				inactiveBackgroundColor={"transparent"}
				inactiveTextColor={"grey"}
				values={[EventTypeEnum.ALERT, EventTypeEnum.HAPPENING, EventTypeEnum.TRADE_OFFER]}
				value={eventType}
				onSelect={(e) => setEventType(e)}
			/>
		</HeaderContainer>
	);
};

export default Header;
