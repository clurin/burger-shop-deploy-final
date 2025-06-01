import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './AppHeader.module.css'

type Props = {}

const AppHeader = (props: Props) => {
    return (
        <div className={style.mainContainer}>
            <div className={style.Logo}>
                <Link to='designer'>
                    <Logo />
                </Link>
            </div>
            <header className={style.container}>
                <div className={style.orderContainer}>
                    <Link to='/designer'>
                        <div className={style.Designer}>
                            <BurgerIcon type='primary' />
                            <p className="text text_type_main-default">
                                Заказать бургер
                            </p>
                        </div>
                    </Link >
                    <Link to='/orderlist'>
                        <div className={style.OrderList}>
                            <ListIcon type='primary' />
                            <p className="text text_type_main-default">
                                Список заказов
                            </p>
                        </div>
                    </Link >
                </div>
                <Link to='/profile'>
                    <div className={style.Profile}>

                        <ProfileIcon type='primary' />
                        <p className="text text_type_main-default">
                            Профиль
                        </p>

                    </div>
                </Link >
            </header>
        </div>
    )
}

export default AppHeader