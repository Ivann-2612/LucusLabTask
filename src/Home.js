import { Redirect } from "react-router"
import Logo from '../src/img/logo.png'

const Home = ({ loggedIn }) => {
    return (
        <>
        <img style={{height:'30px'}} src={Logo} alt='logo' />
        <span style={{fontSize:'45px',position:'absolute',left:'43%',top:'2%',color:'#f1f9f9'}}>Super App</span>
            {loggedIn ? <Redirect to='/pageone' /> : <Redirect to='/login' />}
         
        </>
    )
}

export default Home