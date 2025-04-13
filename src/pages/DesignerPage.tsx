import Table from '../features/Ingredients/components/Table'
import Burger from '../features/Ingredients/components/Burger'

type Props = {}

const DesignerPage = (props: Props) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
            <Table />
            <Burger />
        </div>
    )
}

export default DesignerPage