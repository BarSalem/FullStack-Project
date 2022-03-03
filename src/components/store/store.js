import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authorize/authSlice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
    },
})