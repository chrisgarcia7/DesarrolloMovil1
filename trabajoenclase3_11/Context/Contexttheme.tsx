import { createContext } from "react";

export const contextTheme = createContext({
    isDarkTheme: false,
    toggleTheme: () =>{}
})