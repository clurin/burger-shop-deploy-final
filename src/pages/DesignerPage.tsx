import Table from '../features/Ingredients/components/Table'
import Burger from '../features/Ingredients/components/Burger'
import style from './DesignerPage.module.css'

type Props = {}

const DesignerPage = (props: Props) => {
    return (
        <div className={style.container}>
            <Table />
            <Burger />
        </div>
    )
}

export default DesignerPage