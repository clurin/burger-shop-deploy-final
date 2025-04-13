import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppDispatch, useAppSelector } from '../../../app/index'
import { burgerSelector, clearBurger } from '../ingredientsSlice'
import { accessTokenSelector } from '../../User/userSlice'
import style from './Burger.module.css'
import { useAddOrderMutation } from '../../Order/ordersApi'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Burger = (props: Props) => {
    const burger = useAppSelector(burgerSelector)
    const accessToken = useAppSelector(accessTokenSelector)
    const [addOrder] = useAddOrderMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const totalCost = burger.reduce((a, b) => a + b.price * b.__v, 0)

    async function handleOrder() {
        if (!accessToken || accessToken === 'empty') {
            navigate('/login')
            return
        }

        if (burger.length === 0) {
            alert('Добавьте ингредиенты перед оформлением заказа!')
            return
        }

        const result = await addOrder(burger)

        if (result?.data?.success) {
            alert(result?.data?.message)
            dispatch(clearBurger(null))
        } else {
            alert(result?.data?.message)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.topSection}>
                <p className="text text_type_main-medium">Цена: {totalCost}</p>
                <div className={style.orderButton} onClick={handleOrder}>
                    <Button type='primary' size='medium' htmlType={'button'}>
                        {accessToken && (accessToken !== 'empty') ? 'Сделать заказ' : 'Войти в профиль'}
                    </Button>
                </div>
            </div>
            <div className={style.list}>
                {burger.map((ingredient) => (
                    <div className={style.ingredient} key={ingredient._id}>
                        <img className={style.image} src={ingredient.image_mobile} alt={ingredient.name} />
                        <p className="text text_type_main-small" style={{ paddingTop: '30px' }}>x{ingredient.__v}</p>
                        <p className="text text_type_main-small" style={{ padding: '25px' }}>{ingredient.name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Burger
