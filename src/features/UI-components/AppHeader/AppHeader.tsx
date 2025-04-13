import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './AppHeader.module.css'

type Props = {}

const AppHeader = (props: Props) => {
    return (
        <header className={style.container}>
            <div className={style.Logo}>
                <Link to='designer'>
                    <Logo />
                </Link>
            </div>
            <div className={style.Designer}>
                <Link to='/designer'>
                    <BurgerIcon type='primary' />
                    <p className="text text_type_main-default">
                        Заказать бургер
                    </p>
                </Link >
            </div>
            <div className={style.OrderList}>
                <Link to='/orderlist'>
                    <ListIcon type='primary' />
                    <p className="text text_type_main-default">
                        Список заказов
                    </p>
                </Link >
            </div>
            <div className={style.Profile}>
                <Link to='/profile'>
                    <ProfileIcon type='primary' />
                    <p className="text text_type_main-default">
                        Профиль
                    </p>
                </Link >
            </div>
        </header>
    )
}

export default AppHeader