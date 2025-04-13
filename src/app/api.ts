import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from './index'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).userSlice.accessToken
        headers.set(process.env.REACT_APP_AUTH_HEADER!, token)
        return headers;
    }
})

export const api = createApi({
    tagTypes: ['users'],
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: (build) => ({
    })
})