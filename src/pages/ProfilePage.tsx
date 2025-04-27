import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/index"
import { logOutToken } from "../features/User/userSlice"

type Props = {}

const ProfilePage = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const logOut = () => {
    dispatch(logOutToken(null))
    alert("Вы вышли из профиля")
    window.location.reload()
    navigate('/login')
  }

  return <>
    <p className="text text_type_main-small" style={{ padding: '30px' }}
      onClick={() => navigate('/orderlist')}>
      ПРОСМОТРЕТЬ ЗАКАЗЫ
    </p>
    <p className="text text_type_main-small" style={{ padding: '30px' }}
      onClick={logOut}>
      ВЫЙТИ ИЗ ПРОФИЛЯ
    </p>
  </>
}

export default ProfilePage