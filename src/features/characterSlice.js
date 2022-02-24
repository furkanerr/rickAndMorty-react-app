import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Services from "../services/api/api";

// First, create the thunk
export const fetchAllCharacter = createAsyncThunk(
    "getCharacters",
    async (url, thunkAPI) => {
        try {
            const response = await Services.getAllCharacter(url);
            return response.data;
        }

        catch (error){
            console.log(error);
            return thunkAPI.RejectWithValue(error);
        }


    }

)



// Then, handle actions in your reducers:
const characterSlice = createSlice({
    name: 'characters',
    initialState: { characters: [], loading: false ,error:'' },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {

        builder.addCase(fetchAllCharacter.pending, (state, action) => {
           state.loading =true;
        });
        builder.addCase(fetchAllCharacter.fulfilled, (state, action) => {

            state.characters=(action.payload);
        });
        builder.addCase(fetchAllCharacter.rejected, (state, action) => {
            state.loading = false
            state.error ="Error fetching data"
            console.log(action)

        })
    },
})

export default characterSlice.reducer;