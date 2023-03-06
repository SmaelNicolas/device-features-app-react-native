import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import React, { useState } from "react";
import { Alert, Button, Image, Text, View } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

export const ImageSelector = ({ onImage }) => {
	const [pickedUrl, setPickedUrl] = useState(null);

	const verifyPermissions = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();

		if (status !== "granted") {
			Alert.alert(
				"El permiso ha sido denegado",
				"No es posible abrir la camara. Necesitamos permisos para su uso",
				[{ text: "Aceptar" }]
			);
			return false;
		}
		return true;
	};

	//PREGUNTA POR LOS PERMISOS , modificacion de imagen, obtener url
	const onHandleTakeImage = async () => {
		const isCameraPermission = await verifyPermissions();
		if (!isCameraPermission) return;

		const image = await ImagePicker.launchCameraAsync({
			aspect: [16, 9],
			quality: 0.7,
		});

		setPickedUrl(image.uri);
	};
	return (
		<View style={styles.container}>
			<View style={styles.preview}>
				{!pickedUrl ? (
					<Text>Ninguna imagen seleccionada</Text>
				) : (
					<Image style={styles.image} source={{ uri: pickedUrl }} />
				)}
			</View>
			<Button
				title="Foto 📸"
				color={colors.secondary}
				onPress={onHandleTakeImage}
			/>
		</View>
	);
};
