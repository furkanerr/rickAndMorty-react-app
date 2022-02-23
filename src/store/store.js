import {configureStore} from "@reduxjs/toolkit";
import characterSlice from "../features/characterSlice";
import singleCharacterSlice from '../features/characterDetailSlice';


const store = configureStore({

    reducer:{
        characters:characterSlice,
        singleCharacter:singleCharacterSlice
    }

})

export default store;