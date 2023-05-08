import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        whiskey_name: "Whiskey Name",
        whiskey_image_id: 'Whiskey Image ID',
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseWhiskeyName: (state, action) => { state.whiskey_name = action.payload }, // All we're doing is setting the input to the state.name
        chooseWhiskeyImageID: (state, action) => { state.whiskey_image_id = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseWhiskeyName, chooseWhiskeyImageID } = rootSlice.actions