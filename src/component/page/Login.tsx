import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router'
import classNames from 'classnames/bind'
import styles from './styles/login.module.scss'
import { DataPost, getUser } from '../../redux/axios/axios'
import { loginSuccess, userLogin } from '../../redux/reducer'

const cx = classNames.bind(styles)

const Login:React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const listUser = useSelector((state:any) => state.user.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        getUser(dispatch)
    },[])

    const handleLogin = (e:any) => {
        e.preventDefault()
        const login = listUser.some((user:DataPost) => user.email === email && user.password === password)
        
        if (login) {
            const user = listUser.find((user:DataPost) => user.email === email && user.password === password)
            dispatch(loginSuccess())
            dispatch(userLogin(user)) 
            navigate('/')
        }
    }
    const handleRegister = () => {
        navigate('/register')
    }

  return (
    <section>
        <form action="" className={cx('form')}>
            <label className={cx('label')}>Tài khoản</label>
            <input 
            className={cx('input')}
            type="text"
            onChange={e => setEmail(e.target.value)}
            
            />
            <label className={cx('label')}>Mật khẩu</label>
            <input 
            className={cx('input')}
            type="password" 
            onChange={e => setPassword(e.target.value)}
            
            />
            <div className={cx('btn')}>
                <button className={cx('login')} onClick={handleLogin}>Đăng Nhập</button>
                <button className={cx('register')} onClick={handleRegister}>Đăng Kí</button>
            </div>

        </form>
        
    </section>
  )
}

export default Login