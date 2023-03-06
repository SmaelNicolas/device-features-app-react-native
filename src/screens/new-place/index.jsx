import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector } from "../../components";
import { addPlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");

	const onHandleChange = (text) => {
		setTitle(text);
	};

	const onHandleSubmit = () => {
		dispatch(addPlace(title, image));
		navigation.navigate("Places");
	};

	const onImage = (urlImage) => {
		console.log("ONIMAGE", urlImage);
		setImage(urlImage);
	};

	useEffect(() => {
		console.log("USEEFFECT", image);
	}, [image]);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Titulo</Text>
				<TextInput
					style={styles.input}
					placeholder="Nuevo ubicacion"
					onChangeText={onHandleChange}
					value={title}
				/>
				<ImageSelector onImage={onImage} />
				<Button
					title="Grabar dirección"
					color={colors.primary}
					onPress={onHandleSubmit}
				/>
			</View>
		</ScrollView>
	);
};

export default NewPlace;
