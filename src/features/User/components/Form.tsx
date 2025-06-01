import React, { FC, useState } from 'react'
import style from './Form.module.css'
import { useAppDispatch } from '../../../app/index'
import { useLogInMutation, useRegistrationUserMutation } from '../userApi'
import { saveAccessToken } from '../userSlice'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

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
                <div className={style.inputWrapper}>
                    <Input
                        type={'text'}
                        placeholder={'Email'}
                        onChange={(e) => setEmailValue(e.target.value)}
                        value={emailValue}
                        name={'email'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    />
                </div>
                <Input
                    type={'text'}
                    placeholder={'Логин'}
                    onChange={(e) => setLoginValue(e.target.value)}
                    value={loginValue}
                    name={'login'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                />
                <Input
                    type={'text'}
                    placeholder={'Пароль'}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    value={passwordValue}
                    name={'password'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                />
                <Button htmlType="submit" type="primary" size="medium">
                    {isForLogInPage ?
                        <p className="text text_type_main-small">Вход</p>
                        : <p className="text text_type_main-small">Регистрация</p>}
                </Button>
            </form>
        </div>
    )
}

export default Form