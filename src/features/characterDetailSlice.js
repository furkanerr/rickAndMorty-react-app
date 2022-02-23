import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Services from "../services/api/api";
import {fetchAllCharacter} from "./characterSlice";


export const fetchSingleCharacter = createAsyncThunk(
    "getCharactersById",
    async(id,thunkAPI) =>{
        try {
            const response = await Services.getCharacterById(id);
            return response.data;
        }
        catch (e) {
            console.log(e);

        }
    }

)


const singleCharacterSlice = createSlice({
    name: 'users',
    initialState: { singleCharacter: {}, loading: false ,error:''  },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCharacter.pending, (state, action) => {
            state.loading =true;
        });
        builder.addCase(fetchSingleCharacter.fulfilled, (state, action) => {

          state.singleCharacter = action.payload;
        });
        builder.addCase(fetchAllCharacter.rejected, (state, action) => {
            state.loading = false
            state.error ="Error fetching data"
        })
    },
})


export default  singleCharacterSlice.reducer;