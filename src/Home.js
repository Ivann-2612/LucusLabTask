import { Redirect } from "react-router"
import Logo from '../src/img/logo.png'
import SocialNetwork from "./SocialNetwork"

const Home = ({ loggedIn }) => {
    return (
        <div className='home-wrapper'>
        <img style={{height:'30px'}} src={Logo} alt='logo' />
        {/* <span style={{fontSize:'30px',position:'absolute',left:'45.5%',top:'28%',color:'#353535'}}>Super App</span> */}
        <div className='square'></div>
            {loggedIn ? <Redirect to='/pageone' /> : <Redirect to='/login' />}
         <SocialNetwork />
        </div>
    )
}

export default Home