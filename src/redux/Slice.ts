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
            state.todos.push({
                id: nanoid(),
                task: action.payload,
            })
        },
        removeTodos:(state : {todos : ToDo[]}, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
})

export const {addTodos, removeTodos} = slice.actions;
export default slice.reducer;