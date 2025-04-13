import style from './Burger.module.css'
import { useGetOrdersQuery } from '../ordersApi'

type Props = {}

const OrdersList = (props: Props) => {
    const { data } = useGetOrdersQuery(null)
    const orders = data

    return (
        <div className={style.container}>
            {orders && orders?.length > 0 ? (
                orders.map((order, orderIndex) => (
                    <div className={style.order} key={orderIndex}>
                        <h3 className="text text_type_main-medium">Заказ {orderIndex + 1}</h3>
                        {order.ingredients.map((ingredient) => (
                            <div className={style.ingredient} key={ingredient._id}>
                                <img className={style.image} src={ingredient.image_mobile} alt={ingredient.name} />
                                <p className="text text_type_main-small" style={{ paddingTop: '30px' }}>x{ingredient.__v}</p>
                                <p className="text text_type_main-small" style={{ padding: '25px' }}>{ingredient.name}</p>
                            </div>
                        ))}
                    </div>
                ))
            ) : (<p className="text text_type_main-medium">Нет заказов</p>)}
        </div>
    )
}

export default OrdersList