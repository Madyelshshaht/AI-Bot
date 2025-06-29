import { createSlice } from "@reduxjs/toolkit";

type Tthemetype = {
    darkMode: boolean;
}


const getInitialMode = (): boolean => {
    if (typeof localStorage !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme !== null) {
            return savedTheme === "true";
        }
    }
    return false; // الوضع الافتراضي
};

const initialState: Tthemetype = {
    darkMode: getInitialMode(),
};

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggletheme: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem("theme", String(state.darkMode));
        }
    }
})

export const { toggletheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;