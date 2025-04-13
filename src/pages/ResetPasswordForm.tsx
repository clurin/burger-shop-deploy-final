import React, { useState } from 'react'
import style from './Form.module.css'
import { useResetPasswordRequestMutation, useResetPasswordMutation } from '../features/User/userApi'
import { useNavigate, useParams } from 'react-router-dom';

type RouteParams = {
    reset_token: string
}

const ResetPasswordRequestForm = () => {
    const { reset_token } = useParams<RouteParams>()
    const navigate = useNavigate()

    const [emailValue, setEmailValue] = useState<string>('')
    const [newPasswordValue, setNewPasswordValue] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    // const [step, setStep] = useState<number>(1)

    const [resetPasswordRequest] = useResetPasswordRequestMutation()
    const [resetPassword] = useResetPasswordMutation()

    const handleSubmitEmail = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!emailValue) {
            alert('Введите email!')
            return
        }
        try {
            const response = await resetPasswordRequest({
                email: emailValue,
            })

            if (response?.data) {
                setMessage(`Письмо с инструкциями отправлено на ${emailValue}.`)
                // setStep(2)
            } else {
                setMessage('Произошла ошибка. Попробуйте снова.')
            }
        } catch (error) {
            setMessage('Ошибка при отправке запроса.')
        }
    }

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!newPasswordValue) {
            alert('Заполните все поля')
            return
        }
        try {
            const responce = await resetPassword({
                //* ! для того, чтобы указать, что не null и не undifinded
                token: reset_token!,
                newPassword: newPasswordValue
            })

            if (responce?.data) {
                setMessage('Пароль был изменён')
                navigate('/login')
            } else {
                setMessage('Произошла ошибка. Попробуйте снова.')
            }

        } catch (error) {
            setMessage('Ошибка при изменении пароля')
        }
    }

    return (
        <>
            <div className={style.container}>
                {!reset_token && (
                    <form onSubmit={handleSubmitEmail} className={style.form}>
                        <input
                            type="email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                            placeholder="Введите ваш email"
                            required
                        />
                        <button type="submit">
                            <p className="text text_type_main-small">Отправить запрос на сброс пароля</p>
                        </button>
                    </form>
                )}

                {reset_token && (
                    <form onSubmit={handleChangePassword} className={style.form}>
                        <input
                            type="password"
                            value={newPasswordValue}
                            onChange={(e) => setNewPasswordValue(e.target.value)}
                            placeholder="Введите новый пароль"
                            required
                        />
                        <button type="submit">
                            <p className="text text_type_main-small">Изменить пароль</p>
                        </button>
                    </form>
                )}
            </div>
            <p className="text text_type_main-default">{message}</p>
        </>
    )
}

export default ResetPasswordRequestForm
