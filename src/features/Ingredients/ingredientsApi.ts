import { api } from "../../app/api";
import ENDPOINTS from "../../app/endopoints";
import { Ingredient } from "./models/Ingredient";

export const ingredientsApi = api.enhanceEndpoints({ addTagTypes: ['ingredients', 'orders'] }).injectEndpoints({
    endpoints: (build) => ({
        getIngredients: build.query<Ingredient[], null>({
            query: () => ENDPOINTS.AUTH.INGREDIENTS,
            providesTags: ['ingredients']
        })
    })
})

export const {
    useGetIngredientsQuery,
} = ingredientsApi