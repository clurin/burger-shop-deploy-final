import React from 'react'
import Form from '../features/User/components/Form'
import { Link } from 'react-router-dom'

type Props = {}

const LogInPage = (props: Props) => {
    return (
        <div>
            <Form isForLogInPage={true} />
            <p className="text text_type_main-small" style={{ padding: '30px' }} >
                Нет профиля? Нажмите, чтобы <Link to="/registration"><b>ЗАРЕГИСТРИРОВАТЬСЯ</b></Link>
            </p>
            <p className="text text_type_main-small" style={{ padding: '30px' }} >
                Забыли пароль? Нажмите, чтобы выполнить <Link to="/reset_password"><b>СБРОС ПАРОЛЯ</b></Link>
            </p>
        </div>
    )
}

export default LogInPage