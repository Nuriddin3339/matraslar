import './Login.css'
import { useState, useEffect, useRef } from 'react'
const Login = ({data}) => {

  const [token, setToken] = useState(data )

  const userName = useRef('')
  const userParol = useRef('')

    function handleSubmit(e){
      e.preventDefault()
      let obj = {
        userName: userName.current.value,
        password: userParol.current.value
      }
        console.log(obj);
        fetch('http://localhost:1212/admin/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
        }) .then(res =>res.json()).then(data => {
          if(data.token){
            setToken(data)
            localStorage.setItem('token',JSON.stringify(data));
          }
        })

  } 
  return (

    <div>
      <form  onSubmit={handleSubmit} className='login-form'>
        <h2>Kirish</h2>
        <input ref={userName} type="text" placeholder="Login" />
        <input ref={userParol} type="text" placeholder="Parol" />
        <button type='submit'>Kirish</button>
      </form>
    </div>
  )
}

export default Login