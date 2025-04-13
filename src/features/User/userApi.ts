import { api } from "../../app/api"
import ENDPOINTS from "../../app/endopoints"

// Send data on server 
interface LogInRequest {
    login: string,
    password: string,
    email: string
}

// Get token from server
interface LogInResponse {
    accessToken: string,
    message: string,
    success: boolean
}

//* <ответ с сервера, отправляемые данные с фронтенда>
export const usersApi = api.enhanceEndpoints({ addTagTypes: ['users'] }).injectEndpoints({
    endpoints: (build) => ({
        logIn: build.mutation<LogInResponse, LogInRequest>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.LOGIN,
                method: 'POST',
                body
            }),
            invalidatesTags: ['users']
        }),
        registrationUser: build.mutation<string, LogInRequest>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.REGISTRATION,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['users']
        }),
        resetPasswordRequest: build.mutation<string, { email: string }>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.RESETPASSWORDREQUEST,
                method: 'POST',
                body,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!)}`,
                    'Content-Type': 'application/json',
                }
            }),
            invalidatesTags: ['users']
        }),
        resetPassword: build.mutation<string, { token: string, newPassword: string }>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.RESETPASSWORD,
                method: 'POST',
                body,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                }
            }),
        }),

    })
})

export const {
    useLogInMutation,
    useRegistrationUserMutation,
    useResetPasswordRequestMutation,
    useResetPasswordMutation,
} = usersApi
