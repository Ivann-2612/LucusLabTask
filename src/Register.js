import { registerUser } from "./service"
import { useRegister } from "./useRegister"
import { getAllUsers } from './service'
import { useHistory } from 'react-router-dom'


const validPassword = (password) => password.length >= 8 
                                 && password.split('').some(char => !isNaN(Number(char)))
                                 && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))


const Register = () => {
    const [username,setUsername,email,setEmail,password,setPassword] = useRegister()
    const history = useHistory()

    return (
        <form onSubmit={e => {
            e.preventDefault()
            if(username.length < 4 && !validPassword(password)){
                console.log('Invalid input, username at least 4, password 8 characters, one letter, one number')
                return
            }
            getAllUsers().then(res => {
                if(!res.data.some(user => user.username === username || user.email === email)){
                    registerUser(username,email,password).then(res => {
                        history.push('/login')
                    })
                }
                else{
                    console.log('User already exists')
                }
            })
        }}>
            <div className='div-input'>
            <input className='input' type="text" placeholder="username..." onChange={e => setUsername(e.target.value)}/>
            <input className='input' type="email" placeholder="email..." onChange={e => setEmail(e.target.value)} />
            <input className='input' type="password" placeholder="password..." onChange={e => setPassword(e.target.value)} />
            <input className='input' type="submit" value="Register" />
            </div>
        </form>
    )
}

export default Register