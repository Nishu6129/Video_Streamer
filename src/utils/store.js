import {configureStore} from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import searchSlice from "./searchSlice"
import chatSlice from "./Chatslice"

const store = configureStore({
    reducer: {
        app: AppSlice,
        search: searchSlice,
        chat: chatSlice,

    }
});

export default store;