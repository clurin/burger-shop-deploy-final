import React from 'react'
import style from './InfoModal.module.css'
import { useAppSelector } from '../../../../app/index'
import { ingredientsForInfo, isModalOpenSelector } from './modalSlice'
import useToogleModalOpen from './hooks/useToogleModalOpen'

type Props = {}

const InfoModal = (props: Props) => {
    const ingredient = useAppSelector(ingredientsForInfo)
    const isModalOpen = useAppSelector(isModalOpenSelector)
    const toogle = useToogleModalOpen()
    if (!isModalOpen) return null

    return (
        <div className={style.container}>
            <p className="text text_type_main-large">Состав ингредиента</p>
            <button onClick={toogle}>
                <p className="text text_type_main-medium">X</p>
            </button>
            <img src={ingredient.image} alt='ingredient_image' />
            <p className="text text_type_main-medium">{ingredient.name} </p>
            <p className="text text_type_main-small">Калории:      {ingredient.calories}г</p>
            <p className="text text_type_main-small">Белки:      {ingredient.proteins}г</p>
            <p className="text text_type_main-small">Жиры:      {ingredient.fat}г</p>
            <p className="text text_type_main-small">Углеводы:      {ingredient.carbohydrates}г</p>
        </div>
    )
}

export default InfoModal