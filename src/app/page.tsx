"use client";
import { ToDo } from "@/types/type";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const todos = useSelector((state: any) => state.todos.todos);

  const removeTodo = (index: number) => {
   
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-100 to-purple-100 py-8 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4 text-center">My ToDos</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Here is my all todos list.
        </p>
        <ul className="space-y-4">
          {todos.map((todo: ToDo, idx: number) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-purple-50 rounded-lg px-4 py-3 shadow hover:shadow-lg transition"
            >
              <span className="text-gray-800">{todo.task}</span>
              <button
                onClick={() => removeTodo(idx)}
                className="ml-4 p-2 rounded-full hover:bg-red-100 transition text-red-600 font-semibold"
                aria-label="Remove todo"
              >
                Delete
              </button>
            </li>
          ))}
          {todos.length === 0 && (
            <li className="text-center text-gray-400 py-4">No todos left!</li>
          )}
        </ul>
      </div>
    </div>
  );
}
