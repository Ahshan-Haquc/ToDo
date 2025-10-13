import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/redux/Slice"

export const store = configureStore({
    reducer:{
        todos: todoReducer
    }
})