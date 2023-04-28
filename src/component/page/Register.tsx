
import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import {useDispatch,useSelector} from 'react-redux'
import styles from './styles/register.module.scss'
import { DataPost, getUser, postUser } from '../../redux/axios/axios'
import {useNavigate} from 'react-router'
import { postUserRedux } from '../../redux/reducer'


const cx = classNames.bind(styles)
const Register:React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [nameUser, setNameUser] = useState<string>('')
    const navigate = useNavigate()
    const listUser = useSelector((state:any) => state.user.users)
    const dispatch = useDispatch()

    const user = {
        email: email,
        password:password,
        nameUser:nameUser,
    }
    const handleRegister = (e:any) => {
        e.preventDefault()
        const registerSuccess = listUser?.every((user:DataPost) => user.email !== email)
        if (registerSuccess) {
            const sync = async () => {
                await postUser(user)
                await dispatch(postUserRedux(user))
                await navigate('/login')
            }
            sync()
        }
        
    }
    const handleLogin = () => {
        navigate('/login')
    }
    useEffect(() => {
        getUser(dispatch)

    },[])
    
  return (
    <section>
        <form action="" className={cx('form')}>
            <label className={cx('label')}>Tên đăng nhập</label>
            <input 
            className={cx('input')}
            type="text"
            onChange={e => {setEmail(e.target.value)}}
            
            />
            <label className={cx('label')}>Tên người dùng</label>
            <input 
            className={cx('input')}
            type="text"
            onChange={e => setNameUser(e.target.value)}
            />
            <label className={cx('label')}>Mật khẩu</label>
            <input 
            className={cx('input')}
            type="text" 
            onChange={e => setPassword(e.target.value)}
            />
            <div className={cx('btn')}>
                <button className={cx('register')} onClick={handleRegister}>Đăng Ký</button>
                <button className={cx('login')} onClick={handleLogin}>Đăng Nhập</button>
            </div>
        </form>
        
    </section>
  )
}

export default Register