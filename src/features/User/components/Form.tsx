import React, { FC, useState } from 'react'
import style from './Form.module.css'
import { useAppDispatch } from '../../../app/index'
import { useLogInMutation, useRegistrationUserMutation } from '../userApi'
import { saveAccessToken } from '../userSlice'
import { useNavigate } from 'react-router-dom'

type Props = {
    isForLogInPage: boolean
}

const Form: FC<Props> = ({ isForLogInPage }) => {
    const navigate = useNavigate()

    const [loginValue, setLoginValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>('')

    const dispatch = useAppDispatch()
    const [loginUser] = useLogInMutation()
    const [registrationUser] = useRegistrationUserMutation()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!loginValue || !passwordValue || !emailValue) {
            alert('Заполните все поля!')
            return
        }

        //* Для входа в профиль
        if (isForLogInPage) {
            const result = await loginUser({
                login: loginValue,
                password: passwordValue,
                email: emailValue
            })
            if (result.data?.success === true) {
                dispatch(saveAccessToken(result.data?.accessToken))
                alert("Успешный вход")
                navigate('/profile')
            } else {
                alert("Ошибка входа")
            }
        }

        //* Для регистрации
        else {
            const result = await registrationUser({
                login: loginValue,
                password: passwordValue,
                email: emailValue
            })
            if (result?.data) {
                alert('Успешная регистрация')
                navigate('/login')
            } else {
                alert('Ошибка при регистрации')
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.container}>
                <input
                    // type='email'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
                    value={emailValue}
                    placeholder='email' />
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginValue(e.target.value)}
                    value={loginValue}
                    placeholder='login' />
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
                    value={passwordValue}
                    placeholder='password' />
                <button>{isForLogInPage ?
                    <p className="text text_type_main-small">Вход</p> : <p className="text text_type_main-small">Регистрация</p>}</button>
            </form>
        </div>
    )
}

export default Form