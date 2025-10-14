import { createSlice } from "@reduxjs/toolkit";
import { theme } from "@/types/type";

const initialState : theme = {
    theme: "light"
}

export const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.theme==="light" ? state.theme="dark" : state.theme="light";
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;