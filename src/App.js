import './App.css'
import Home from '../src/components/Home'
import PageOne from '../src/components/PageOne'
import PageTwo from '../src/components/PageTwo'
import PageThree from '../src/components/PageThree'
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import { useState } from 'react'
import Nav from '../src/components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {

  const [user,setUser] = useState(null)

  return (
    <Router>
             <>
           {
               user ? 
               <>
              <Nav />              
               <div className='loggedin'>
                 <span> Username:  {user.username}</span>&nbsp;
                 <button className='logout' onClick={() => setUser(null)}>LOGOUT</button> 
               </div>               
               </>
               :
               <> 
                <Home />
               </>
           }
       </>
      
 <Switch>
   <>    
           <Route exact path="/">
               <Home loggedIn={user} />
           </Route>
           <Route exact path="/login">
               <Login setUser={setUser} />
           </Route>
           <Route exact path="/register">
               <Register />
           </Route>
           <Route exact path="/pageone">
               <PageOne loggedIn={user} />
           </Route>

           <Route exact path="/pagetwo">
               <PageTwo loggedIn={user} />
           </Route>
           <Route exact path="/pagethree">
               <PageThree loggedIn={user} />
           </Route>
          
       
   </>    
 </Switch>  

    </Router>
  );
}

export default App;
