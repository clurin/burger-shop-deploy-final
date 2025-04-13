import { createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../../app/index"
import { Ingredient } from "../../models/Ingredient"

type initialStateType = {
    isModalOpen: boolean
    ingredientsForInfo: Ingredient
}

const initialState: initialStateType = {
    isModalOpen: false,
    ingredientsForInfo: {
        _id: "",
        name: "",
        type: "",
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        calories: 0,
        price: 0,
        image: "",
        image_mobile: "",
        image_large: "",
        __v: 0
    }
}

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: initialState,
    reducers: {
        toggleIsModalOpen: (state, action) => {
            state.isModalOpen = !state.isModalOpen
        },
        setInfoIngredient: (state, action) => {
            state.ingredientsForInfo = action.payload
        }
    }
})

export default modalSlice.reducer
const modalSliceStore = (state: RootState) => state.modalSlice
export const { toggleIsModalOpen, setInfoIngredient } = modalSlice.actions
export const isModalOpenSelector = createSelector([modalSliceStore], item => item.isModalOpen)
export const ingredientsForInfo = createSelector([modalSliceStore], item => item.ingredientsForInfo)