import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  let navigate = useNavigate();

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
   
  function handleUsernameChanged(event) {

    setUsername(event.target.value)

  }

  function handlePasswordChanged(event) {
    setPassword(event.target.value)

  }

  function handleSubmitted(e) {
    
    if (username=="admin" && password=="admin")
    {
      navigate(`/about`);
    }
   
  }
   

      


      

        
        return (
        <>
        <Helmet bodyAttributes={{style:'background-color: #1b75bb'}}></Helmet>
             <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                <div className="container">
                    <div className="card login-card">
                        <div className="row no-gutters">
                            <div className="col-md-5">
                              <div alt="login" className="login-card-img"></div>
                             </div>
                            <div className="col-md-7">
                         <div className="card-body">
                      <div className="brand-wrapper">
                 </div>
                 <p className="login-card-description">Sign into your account</p>
                <form action="#!">
                <div className="form-group">
                    <label htmlFor="email" className="sr-only">Username</label>
                    <input type="text" name="email" id="email" className="form-control" placeholder="Username" onChange={handleUsernameChanged.bind(this)} value={username}></input>
                </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="***********" onChange={handlePasswordChanged.bind(this)} value={password}></input>
                  </div>
                    <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" onClick={handleSubmitted.bind(this)}></input>
                </form>
                
                </div>
             </div>
         </div>
      </div>
    </div>
  </main>
  
               <div>

               </div>
          

               
        </>
            );
        }

export default Login;