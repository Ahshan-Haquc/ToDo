import { createSlice, nanoid } from "@reduxjs/toolkit";
import {ToDo} from "@/types/type"

const initialState = {
    todos: [] as ToDo[]
};

const slice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodos:(state : { todos: ToDo[] }, action)=>{
            console.log("in the slice value is : ", action);
            
            state.todos.push({
                id: nanoid(),
                task: action.payload,
            })
        }
    }
})

export const {addTodos} = slice.actions;
export default slice.reducer;