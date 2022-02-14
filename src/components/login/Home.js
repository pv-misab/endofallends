import React, {useState} from 'react';
import Helmet from 'react-helmet';
import ClientInfo from './ClientInfo';
import CertDetails from './CertDetails';



const Home = () => {
  var istrue=false;
  

  const [toggle, setToggle] = useState(false);
  const ok = e => {
    setToggle(true);
  }

  const trying = e => {
    alert(toggle)
  }
  
    return(

<>

<Helmet bodyAttributes={{style:'background-color: #fff '}}></Helmet>
        {!toggle? <CertDetails/>  : <ClientInfo triggerOk={ok}> 
       </ClientInfo> }
        
             <button className="btn btn-default" type="submit" onClick={trying}>asdad</button>   
       </>
        
        )
  

}

export default Home;