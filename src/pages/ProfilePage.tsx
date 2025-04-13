import { useAppDispatch } from "../app/index"
import { logOutToken } from "../features/User/userSlice"

type Props = {}

const ProfilePage = (props: Props) => {
  const dispatch = useAppDispatch()

  const logOut = () => {
    dispatch(logOutToken(null))
    alert("Вы вышли из профиля")
    window.location.reload()
  }

  return <>
    <p className="text text_type_main-small" style={{ padding: '30px' }} >
      <a href='http://localhost:3000/orderlist'>ПРОСМОТРЕТЬ ЗАКАЗЫ</a>
    </p>
    <p className="text text_type_main-small" style={{ padding: '30px' }}
      onClick={logOut}>
      ВЫЙТИ ИЗ ПРОФИЛЯ
    </p>
  </>
}

export default ProfilePage