import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAuthenticationInformation } from '../../utils/utils.js'
export default function Login(params) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = () => {
        // api call , we need to check on to the server 

        fetch(`${process.env.REACT_APP_BACKEND_URL}/authenticate?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(response => {

                if (response.authenticated) {
                    setAuthenticationInformation('true', response.token)
                    navigate('/home')
                } else {
                    setAuthenticationInformation('false')
                    alert('invalid')
                }

            })


    }

    const signUp = () => {
        navigate('/signup')
    }

    return (<>
        <div className='container'>
            <div className='form'>
                <h2>Sagar's Facebook</h2>
                <h6>changes directly in main branch</h6>
                <h4>Log in </h4>
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />    <br />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />    <br />
                <button onClick={login}>Log in</button> <button onClick={signUp}>Sign Up</button>
            </div>
        </div>
    </>)
}