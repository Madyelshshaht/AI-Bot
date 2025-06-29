import { configureStore } from "@reduxjs/toolkit";
import Themeslice from "./Themeslice";

const Store = configureStore({
    reducer: {
        theme: Themeslice,
    }
})

export default Store;