import './App.css'
import Home from './Home'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Login from './Login'
import Register from './Register'
import { useState } from 'react'
import Nav from './Nav'
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
              
                {/* <Search setSearch={setSearch} search={search} />  */}
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
