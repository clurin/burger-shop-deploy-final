import { useAppDispatch } from "../../../../../app/index"
import { toggleIsModalOpen } from "../modalSlice"


const useToogleModalOpen = () => {
    const dispach = useAppDispatch()
    return () => dispach(toggleIsModalOpen(null))
}

export default useToogleModalOpen