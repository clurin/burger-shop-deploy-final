import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../app/index'
import { accessTokenSelector } from '../../features/User/userSlice'

type Props = {
    children: React.ReactNode
}

const PrivateOverlay = (props: Props) => {
    const accessToken = useAppSelector(accessTokenSelector)
    return (
        <div>
            {accessToken === undefined || accessToken === 'empty' ? <Navigate to='/login' /> : props.children}
        </div>
    )
}

export default PrivateOverlay