import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { PlaceItem } from "../../components/place-item";

import { styles } from "./styles";

const PlaceList = ({ navigation }) => {
	const places = useSelector((state) => state.place.places);

	const renderItem = ({ item }) => (
		<PlaceItem
			{...item}
			onSelect={() =>
				navigation.navigate("PlaceDetail", { placeId: item.id })
			}
		/>
	);

	const ListEmptyComponent = () => (
		<View style={styles.emptyContainer}>
			<Text style={styles.emptyText}>Crea un nuevo lugar ↗</Text>
		</View>
	);

	const keyExtractor = (item) => item.id;

	return (
		<FlatList
			style={styles.container}
			data={places}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			ListEmptyComponent={ListEmptyComponent}
		/>
	);
};

export default PlaceList;
