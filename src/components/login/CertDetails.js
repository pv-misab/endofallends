import React from 'react';
import { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField';
import { makeStyles, Paper } from '@material-ui/core';


const useStyle = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root': {
            width:'80%',
            margin:theme.spacing(1)
        }
        
        }
}))

const useStyles = makeStyles(theme => ({
    pageContent:{
        margin:theme.spacing(5),
        padding: theme.spacing(3)
    }
}))
const CertDetails = () => {


    const [id, setID] = useState("");
    const [description, setDescription] = useState("");
    const [swl, setSwl] = useState("");
    const [proof, setProof] = useState("");
    const [date, setDate] = useState("");
    const [reason, setReason] = useState("");
    const [details, setDetails] = useState("");
    const [status, setStatus] = useState("");
    const [safety, setSafety] = useState("");

    const [formValues, setFormValues] = useState([{ id: "", description : "", swl:"", 
proof:"", date:"", reason:"", details:"", status:"", safety:""}])

    

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
     }
        
    let addFormFields = () => {
        setFormValues([...formValues, { id: "", description : "", swl:"", 
        proof:"", date:"", reason:"", details:"", status:"", safety:""}])
     }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    const classes = useStyle();
    const classes1 = useStyles();

    const handleInputChange = e => {
        setID("abc");
        setDescription("efg");
    }

    

  return (

    <>
    <div className="container card">
        <div className="">
            <address>
            DT Engineering<br/>
            Unit 9<br/>
            Runcorn<br/>
            </address>
            </div>
            <div className="col-4">
                <table class="row justify-content-center">
                    <tbody>
                        <tr>
                            <td class="pull-right"><b>Customer :  </b></td>
                            <td>  Sample</td>
                        </tr>
                        <tr>
                            <td class="pull-right"><b>Certificate Number :  </b></td>
                            <td>  Sample</td>
                        </tr>
                        <tr>
                            <td class="pull-right"><b>Job Number :  </b></td>
                            <td>  Sample</td>
                        </tr>
                        <tr>
                            <td class="pull-right"><b>Certificate Number :  </b></td>
                            <td>  Sample</td>
                        </tr>
                        <tr>
                            <td class="pull-left"><b>Date :  </b></td>
                            <td>  Sample</td>
                        </tr>
                        <tr>
                            <td class="pull-left"><b>Customer Order Number :  </b></td>
                            <td>  Sample</td>
                        </tr>
                        <tr>
                            <td class="pull-left"><b> Report Prepared By :  </b></td>
                            <td>  Sample</td>
                        </tr>
                        <tr>
                            <td class="pull-left"><b>Colour Code :  </b></td>
                            <td>  Sample</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
    <div className="row">
              <div className="">
                  <div className="card mb-4">
                      <div class="card-header py-3">
                          <form onSubmit={ handleSubmit }>
                              {formValues.map((element, index) => (
                                  <div className="form-inline" key={index}>
                                  <div className="col">
                                      <div className="form-outline">
                                      <input type="text" id="form7Example1" name="id" value={element.id || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="Identification Number" />
                                      <input type="text" id="form7Example1" name="description" value={element.description  || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="Description" />
                                      <input type="text" id="form7Example1" name="swl" value={element.swl  || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="SWL or WLL" />
                                      <input type="text" id="form7Example1" name="proof" value={element.proof  || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="Proof Load" />
                                      <input type="date" id="form7Example1" name="date" value={element.date  || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="Date of Thorough Examinantion" />
                                      <input type="text" id="form7Example1" name="reason" value={element.reason  || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="Reason A/B/C/D" />
                                      <input type="text" id="form7Example1" name="details" value={element.details  || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="Details of Any Test" />
                                      <input type="text" id="form7Example1" name="status" value={element.status  || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="Status (ND/SDR/NF/SC)" />
                                      <input type="text" id="form7Example1" name="safety" value={element.safety  || ""} onChange={e => handleChange(index, e)} className="form-control" placeholder="Safe To Use" />{
                                          
                                            index ? 
                                              <button type="button"  className="icon-btn add-btn" type="button" onClick={() => removeFormFields(index)}>
                                                  <div class="btn-txt">Remove</div>
                                                  </button> 
                                            : null
                                          
                                      }
                                      </div>
                                      </div>
                                  </div>
                              ))}
                              <div className="">
              
              
         
              </div>
  <button className="icon-btn add-btn" type="button" onClick={() => addFormFields()}>
    <div className="add-icon"></div>
    <div className="btn-txt">Add</div>
  </button>
  <div className="col-md-12 text-center">
  <button className="btn btn-primary btn-lg" type="submit">Submit</button>
  </div>
 <div>
          </div>

          










          
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <Paper className={classes1.pageContent}>
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6} >
                    <TextField
                    variant="outlined"
                    label="ID No"
                    value={id}
                    name="id"
                    onChange={handleInputChange} />
                    <TextField
                    variant="outlined"
                    label="Description"
                    value={description}
                    name="description"
                    onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
        </Paper>


          </>
  )
}

export default CertDetails
