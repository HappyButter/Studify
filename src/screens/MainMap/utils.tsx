export const handleEventType = (type: string) => {
	switch (type) {
		case "meeting":
			return "blue";
		case "tradeOffer":
			return "green";
		case "alert":
			return "red";
	}
};
