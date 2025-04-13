import { api } from "../../app/api";
import ENDPOINTS from "../../app/endopoints";
import { PreOrder } from "./models/types";

interface AddOrderRequest {
    message: string,
    success: boolean
}

export interface RequestOrder {
    ingredients: PreOrder,
    queue: number,
    userId: number
}

export const ordersApi = api.enhanceEndpoints({ addTagTypes: ['ingredients', 'orders'] }).injectEndpoints({
    endpoints: (build) => ({
        addOrder: build.mutation<AddOrderRequest, PreOrder>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.ADDORDER,
                method: 'POST',
                body
            }),
            invalidatesTags: ['orders']
        }),
        getOrders: build.query<RequestOrder[], null>({
            query: () => ENDPOINTS.AUTH.ORDERS,
            providesTags: ['orders']
        })
    })
})

export const {
    useAddOrderMutation,
    useGetOrdersQuery
} = ordersApi