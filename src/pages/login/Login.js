import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAuthenticationInformation } from '../../utils/utils.js'
export default function Login(params) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = () => {
        // api call , we need to check on to the server 

        fetch(`http://localhost:3001/authenticate?username=${username}&password=${password}`)
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
                <h2>Log in </h2>
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />    <br />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />    <br />
                <button onClick={login}>Log in</button> <button onClick={signUp}>Sign Up</button>
            </div>
        </div>
    </>)
}