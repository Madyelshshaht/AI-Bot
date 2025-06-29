import { configureStore } from "@reduxjs/toolkit";
import Themeslice from "./Themeslice";

const Store = configureStore({
    reducer: {
        theme: Themeslice,
    }
})

export default Store;

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch