import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const PlaceList = ({ navigation }) => {
	const places = useSelector((state) => state.place.places);

	return (
		<View style={styles.container}>
			<Text>Place List</Text>
		</View>
	);
};

export default PlaceList;
