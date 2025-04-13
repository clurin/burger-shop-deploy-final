import React from 'react'
import Form from '../features/User/components/Form'

type Props = {}

const RegistrationPage = (props: Props) => {
    return (
        <div>
            <Form isForLogInPage={false} />
        </div>
    )
}

export default RegistrationPage