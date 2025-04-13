import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ingredientsSlice from "../features/Ingredients/ingredientsSlice";
import userSlice from "../features/User/userSlice"
import modalSlice from "../features/Ingredients/components/modal/modalSlice"

const store = configureStore({
    reducer: {
        ingredientsSlice: ingredientsSlice,
        modalSlice: modalSlice,
        userSlice: userSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector