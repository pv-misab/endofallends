import Login from './login/Login'
import Home from './login/Home'
import React, {Component} from 'react';
import {  BrowserRouter as Router,Routes, Route, useNavigate} from 'react-router-dom';

class App extends Component {

    
    render() {
        return(
           <Router>
               <div>

               </div>
               <Routes>
                   <Route exact path='/about' element={< Login />}></Route>
                   <Route exact path='/' element={< Home />}></Route>
                   
               </Routes>
           </Router>

            )
    }

}

export default App;