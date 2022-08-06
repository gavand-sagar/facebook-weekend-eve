import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [typeOfPassword,setTypeOfPassword] = useState('password')

    const toggleTypeOfPassword = ()=>{
        if(typeOfPassword == 'password'){
            setTypeOfPassword('text')
        }else{
            setTypeOfPassword('password')
        }
    }

    const navigate = useNavigate()

    const signup = () => {
        // post information to backend to create a new user

        const user = {
            username: username,
            password: password
        }

        fetch('http://localhost:3001/users', {
            body: JSON.stringify(user),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {

                // take user to login screen
                alert('account created!')
                navigate('./login')

            })


    }

    return (<>
        <div className='container'>
            <div className='form'>
                <h2>Create New Account</h2>
                <input value={username} onChange={e => setUsername(e.target.value)}  placeholder="Enter username"/>    <br />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type={typeOfPassword}/>  <span style={{'cursor':'pointer'}} onClick={toggleTypeOfPassword}>&#128065;</span>   <br />
                <button onClick={signup}>Sign Up</button>
            </div>
        </div>
    </>)


}