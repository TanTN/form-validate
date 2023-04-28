
import { Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import Main from './component/page/Main'
import Login from './component/page/Login'
import Register from './component/page/Register'
import { useSelector } from 'react-redux'


export interface State {
  user: {
    users:[],
    isLogin: boolean,
    userCurrent:{
      nameUser:string
    }
}
}
function App() {
  const loginSuccess = useSelector((state:State) => state.user.isLogin)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loginSuccess ? <Main /> : <Navigate replace to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
