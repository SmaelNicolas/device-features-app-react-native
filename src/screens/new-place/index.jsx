import { Button, ScrollView, Text, TextInput, View } from "react-native";
import colors from "../../utils/colors";

import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Lugar</Text>
				<TextInput
					style={styles.input}
					placeholder="Escribe el nombre del lugar"
				/>
				<Button
					color={colors.primary}
					title="Guardar"
					onPress={() => {}}
				/>
			</View>
		</ScrollView>
	);
};

export default NewPlace;
