import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/index"

type initialStateType = {
    accessToken: string
}

const initialState: initialStateType = {
    accessToken: localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!) || 'empty'
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        saveAccessToken: (state, action) => {
            state.accessToken = action.payload
            localStorage.setItem('accessToken', action.payload)
        },
        logOutToken: (state, action) => {
            localStorage.removeItem('accessToken')
        }
    }
})

export default userSlice.reducer
export const accessTokenSelector = (state: RootState) => state.userSlice.accessToken
export const { saveAccessToken, logOutToken } = userSlice.actions
