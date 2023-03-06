import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { ImageSelector } from "../../components/image-selector";
import { addPlace } from "../../store/place.slice";
import colors from "../../utils/colors";

import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
	const [title, setTitle] = useState("");

	const dispatch = useDispatch();

	const onHandleText = (txt) => {
		setTitle(txt);
	};

	const onHandleSubmit = () => {
		dispatch(addPlace({ title }));
		navigation.goBack();
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Lugar</Text>
				<TextInput
					style={styles.input}
					placeholder="Escribe el nombre del lugar"
					onChangeText={onHandleText}
					value={title}
				/>
				<ImageSelector />
				<Button
					color={colors.primary}
					title="Guardar"
					disabled={title.length === 0}
					onPress={onHandleSubmit}
				/>
			</View>
		</ScrollView>
	);
};

export default NewPlace;
