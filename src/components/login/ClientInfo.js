import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid"

const ClientInfo = (props) => {

    const flag = 0;
    
    const [allValues, setAllValues] = useState({
        customer:'',
        address:'',
        certno:'',
        jobno:'',
        date:'',
        custno:'',
        reporter:'',
        colcode:''
    });

   

    const changeHandler = e => {
        setAllValues( prevValues => {
            return { ...prevValues, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.triggerOk();

       
    }
    
  return (
    <div className="row centerdiv">
    <div className="col-md-8 mb-4">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0 text-center">Thorough Examination Of Lifting Equipment</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} >
            
          <div className="form-outline mb-4">
              <input type="text" id="form7Example3" name="customer" value={allValues.customer} onChange={changeHandler} className="form-control" />
              <label className="form-label" htmlFor="form7Example3" >Customer Name</label>
            </div> 
  
            <div className="form-outline mb-4">
              <textarea className="form-control" id="form7Example7" rows="4" name="address" value={allValues.address} onChange={changeHandler} ></textarea>
              <label className="form-label" htmlFor="form7Example7">Address</label>
            </div>
            <div className="form-group">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Check me if examination address is same as the customer address
        </label>
      </div>
    </div>
  
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form7Example1" className="form-control" name="certno" value={allValues.certno} onChange={changeHandler} />
                  <label className="form-label" htmlFor="form7Example1"  >Certificate Number</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form7Example2" className="form-control" name="jobno" value={allValues.jobno} onChange={changeHandler} />
                  <label className="form-label" htmlFor="form7Example2">Job Number</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="date" id="form7Example1" className="form-control" name="date" value={allValues.date} onChange={changeHandler}/>
                  <label className="form-label" htmlFor="form7Example1">Date Of Report</label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form7Example1" className="form-control" name="custno" value={allValues.custno} onChange={changeHandler}/>
                  <label className="form-label" htmlFor="form7Example1">Customer Number</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form7Example2" className="form-control" name="reporter" value={allValues.reporter} onChange={changeHandler}/>
                  <label className="form-label" htmlFor="form7Example2">Report Prepared By</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form7Example1" className="form-control" name="colcode" value={allValues.colcode} onChange={changeHandler}/>
                  <label className="form-label" htmlFor="form7Example1">Colour Code</label>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
    <button className="btn btn-primary btn-lg"   type="submit">Fill Description</button>
            
            </div>
            
          </form>
          
        </div>
        
      </div>
      
    
  </div>
  </div>
  )
}

export default ClientInfo
