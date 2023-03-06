import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const PlaceDetail = ({ navigation, route }) => {
	const { placeId } = route.params;

	const place = useSelector((state) =>
		state.place.places.find((place) => place.id === placeId)
	);
	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: place.image }} style={styles.image} />
			<View style={styles.location}>
				<View style={styles.addressContainer}>
					<Text style={styles.address}>{place.address}</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default PlaceDetail;
