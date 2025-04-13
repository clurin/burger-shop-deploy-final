import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ingredient } from "./models/Ingredient";
import { RootState } from "../../app/index";

type initialStateType = {
    ingredients: Array<Ingredient>,
    burger: Array<Ingredient>,
}

const initialState: initialStateType = {
    ingredients: [],
    burger: []
}

const ingredientsSlice = createSlice({
    name: 'ingredientsSlice',
    initialState: initialState,
    reducers: {
        getIngredientsFromServer: (state, action: PayloadAction<Array<Ingredient>>) => {
            state.ingredients = action.payload
        },
        addCount: (state, action: PayloadAction<string>) => {
            const ingredient = state.ingredients.find((item) => item._id === action.payload)
            if (ingredient) {
                ingredient.__v += 1
            }
            const orderBurger = state.ingredients.filter((item) => item.__v > 0)
            state.burger = orderBurger
        },
        lessCount: (state, action: PayloadAction<string>) => {
            const ingredient = state.ingredients.find((item) => item._id === action.payload)
            if (ingredient) {
                if (ingredient.__v > 0) {
                    ingredient.__v -= 1
                }
            }
            const orderBurger = state.ingredients.filter((item) => item.__v > 0)
            state.burger = orderBurger
        },
        clearBurger: (state, action) => {
            state.ingredients.forEach((item) => item.__v = 0)
            state.burger = []
        }
    }
})

export default ingredientsSlice.reducer
const ingredientsStore = (state: RootState) => state.ingredientsSlice;
export const ingredientsSelector = createSelector([ingredientsStore], item => item.ingredients);
export const burgerSelector = createSelector([ingredientsStore], item => item.burger);
export const { getIngredientsFromServer, addCount, lessCount, clearBurger } = ingredientsSlice.actions