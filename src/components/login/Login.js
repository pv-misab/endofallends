import React, {Component} from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';

class Login extends Component {
   
   
    render(){






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
                    <input type="text" name="email" id="email" className="form-control" placeholder="Username"></input>
                </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="***********"></input>
                  </div>
                    <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login"></input>
                </form>
                
                </div>
             </div>
         </div>
      </div>
    </div>
  </main>
  
  
        </>
            );
        }
}

export default Login;