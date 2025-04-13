import React, { FC } from 'react'
import { Ingredient } from '../models/Ingredient'
import style from './IngredientContainer.module.css'
import { Counter, CurrencyIcon, InfoIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppDispatch } from '../../../app/index'
import { addCount, lessCount } from '../ingredientsSlice'
import useToogleModalOpen from './modal/hooks/useToogleModalOpen'
import { setInfoIngredient } from './modal/modalSlice'

type Props = {
    ingredient: Ingredient
}

const IngredientContainer: FC<Props> = ({ ingredient }) => {
    const dispatch = useAppDispatch()
    const toogle = useToogleModalOpen()

    const handleSubmit = () => {
        toogle()
        dispatch(setInfoIngredient(ingredient))
    }

    return (
        <div className={style.container}>
            <img src={ingredient.image} alt='' />
            <p className="text text_type_main-medium">
                {ingredient.price}<CurrencyIcon type='primary' />
            </p>

            <Counter count={ingredient.__v} size="default" extraClass="m-1" />

            <button onClick={handleSubmit} className={style.infoButton}>
                <InfoIcon type={'primary'} />
            </button>

            <button className={style.addButton} onClick={() => dispatch(addCount(ingredient._id))}>
                +
            </button>

            <button className={style.lessButton} onClick={() => dispatch(lessCount(ingredient._id))}>
                -
            </button>

            <p className="text text_type_main-small">
                {ingredient.name}
            </p>
        </div>
    )
}

export default IngredientContainer