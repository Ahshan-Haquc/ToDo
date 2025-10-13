import { createSlice } from "@reduxjs/toolkit";
import {ToDo} from "@/types/type"

const initialState = {
    todos: [] as ToDo[]
};

const slice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})

export const {addTodos} = slice.actions;
export default slice.reducer;