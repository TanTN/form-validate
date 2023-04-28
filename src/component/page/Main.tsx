
import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles/main.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../App'
import { userLogout } from '../../redux/reducer'
import { useNavigate } from 'react-router'

const cx = classNames.bind(styles)



const Main:React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state:State) => state.user.userCurrent)
  const handleLogout = () => {
    dispatch(userLogout())
    navigate('/login')
  }
  const handleRegister = () => {
    navigate('/register')
  }
  return (
    <div className={cx('container')}>
        <p className={cx('name')}>{user.nameUser}</p>
        <div className={cx('register')} onClick={handleRegister}>Register</div>
        <div className={cx('logout')} onClick={handleLogout}>Logout</div>
    </div>
  )
}

export default Main