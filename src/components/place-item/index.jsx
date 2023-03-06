import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export const PlaceItem = ({ id, title, image, onSelect, address }) => {
	console.log(image);
	return (
		<TouchableOpacity style={styles.container} onPress={onSelect}>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.info}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.address}>{address}</Text>
			</View>
		</TouchableOpacity>
	);
};
