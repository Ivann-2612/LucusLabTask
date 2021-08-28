import { Redirect } from "react-router"

const Home = ({ loggedIn }) => {
    return (
        <>
            {loggedIn ? <Redirect to='/pageone' /> : <Redirect to='/login' />}
         
        </>
    )
}

export default Home