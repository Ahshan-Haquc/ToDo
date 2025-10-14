"use client"
import { toggleTheme } from '@/redux/themeSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ToggleBtn = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state: any) => state.theme.theme);
    const handleThemeToggle=()=>{
        dispatch(toggleTheme())
    }
    return (
        <div onClick={handleThemeToggle} className="border p-2 rounded bg-gray-200 hover:cursor-pointer hover:bg-gray-400">{currentTheme === "light" ? "Dark" : "Light"} Mode</div>
    );
};

export default ToggleBtn;