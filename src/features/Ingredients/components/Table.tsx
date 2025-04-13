import React, { FC, useEffect, useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useGetIngredientsQuery } from '../ingredientsApi'
import IngredientContainer from './IngredientContainer'
import { Ingredient } from '../models/Ingredient'
import style from './Table.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/index'
import { getIngredientsFromServer, ingredientsSelector } from '../ingredientsSlice'

type Props = {}

const Table: FC<Props> = () => {
    const [currentCategory, setCurrentCategory] = useState<string>('bun')
    const { data } = useGetIngredientsQuery(null)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data) {
            //! ЧЕРЕЗ REDUX
            dispatch(getIngredientsFromServer(data))
        }
    }, [data, dispatch])

    const ingredients = useAppSelector(ingredientsSelector)
    const filteredIngredients = ingredients?.filter((item: Ingredient) => item.type === currentCategory)

    return (
        <div className={style.container}>
            <div className={style.tab}>
                <Tab value='bun' active={currentCategory === 'bun'} onClick={() => setCurrentCategory('bun')}>
                    Булка
                </Tab>
                <Tab value='sauce' active={currentCategory === 'sauce'} onClick={() => setCurrentCategory('sauce')}>
                    Соус
                </Tab>
                <Tab value='main' active={currentCategory === 'main'} onClick={() => setCurrentCategory('main')}>
                    Начинка
                </Tab>
            </div>

            <div className={style.ingredients}>
                {filteredIngredients?.map((item: Ingredient) => (
                    <IngredientContainer key={item._id} ingredient={item} />
                ))}
            </div>
        </div>
    )
}

export default Table