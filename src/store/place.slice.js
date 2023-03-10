import { createSlice } from "@reduxjs/toolkit";
import { Place } from "../models/places";

const initialState = {
	places: [],
};

const placeSlice = createSlice({
	name: "place",
	initialState,
	reducers: {
		addPlace: (state, action) => {
			console.log("ACTION EN SLICE", action);
			const newPlace = new Place(
				Date.now().toString(),
				action.payload.title,
				action.payload.image
			);
			state.places.push(newPlace);
		},
	},
});

export const { addPlace } = placeSlice.actions;

export default placeSlice.reducer;
