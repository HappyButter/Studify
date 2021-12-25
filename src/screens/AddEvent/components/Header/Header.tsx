import React, { useEffect, useState } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ButtonGroup } from "react-native-elements";

import { EventType, EventTypeEnum } from "@/types/types.d";
import { HeaderContainer, HeaderText } from "./Header.styles";
import { useFormikContext } from "formik";

interface HeaderProps {
	eventType: EventType;
	setEventType: (e: any) => void;
}

const Header: React.FC<HeaderProps> = ({ eventType, setEventType }) => {
	const { setFieldValue } = useFormikContext();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const typeList: string[] = Object.values(EventTypeEnum);

	useEffect(() => {
		setSelectedIndex(typeList.indexOf(eventType));
		setEventType(eventType);
		setFieldValue("eventType", eventType);
	}, []);

	const handleTypeChange = (index: number) => {
		setSelectedIndex(index);
		setEventType(typeList[index]);
		setFieldValue("eventType", typeList[index]);
	};

	return (
		<HeaderContainer>
			<HeaderText>Add Event!{"\n"}</HeaderText>
			<ButtonGroup
				buttons={[...typeList]}
				selectedIndex={selectedIndex}
				onPress={(value) => {
					handleTypeChange(value);
				}}
				containerStyle={headerStyles.buttonGroupContainer}
				selectedButtonStyle={headerStyles.buttonContainer}
			/>
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

interface Style {
	buttonGroupContainer: ViewStyle;
	buttonContainer: ViewStyle;
}

const headerStyles = StyleSheet.create<Style>({
	buttonGroupContainer: {
		borderWidth: 0,
		borderRadius: 5,
		backgroundColor: "#4E3B4B",
		height: 45,
	},
	buttonContainer: {
		backgroundColor: "#D37D6B",
	},
});

export default Header;
