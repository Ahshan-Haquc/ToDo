import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/redux/Slice"
import themeReducer from "@/redux/themeSlice"

export const store = configureStore({
    reducer:{
        todos: todoReducer,
        theme: themeReducer
    }
})