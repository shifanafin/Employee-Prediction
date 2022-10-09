import React from 'react'
import "./EmployeeForm.css"
import { TextField,Radio,RadioGroup,FormControl,FormLabel,FormControlLabel } from '@mui/material'


const EmployeeForm = () => {
    function refresh()
    {
      window.location.reload(true)
    }
    return (
      <div style={{backgroundColor:"#e0f2f2", padding:"40px"}}>
      <div className='container-fluid mt-30px'  >
        <div className='row'>
          <div className="col-md-12 offset-md-0">
          <div className="card" >
            <div className="card-header">
              <h>
                <b>
                  Employee form
                </b>
              </h>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                <div className="col-md-8" >
                  <div className="row" >
                    <div className="col-md-6" >
                      <div className="form-group" >
                        <label htmlFor='empno' >EmployeeId</label>
                        <input type="text" className="form-control" id="empno" />
                        <span id='available'>
  
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6" >
                      <div className="form-group" >
                        <label htmlFor='empno' >Employee Name</label>
                        <input type="text" className="form-control" id="empno" />
                        <span id='available'></span>
                      </div>
                    </div>
                    <div className="col-md-6" >
                  
                      <fieldset className='form-group'>
                    
  
                      
                      <div className="form-check-inline">
                      <FormControl >
  <FormLabel  id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup 
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    // value={value}
    // onChange={handleChange}
  >
    <FormControlLabel    value="female" control={<Radio style={{itemColor:"black"}} />} label="Female" />
    <FormControlLabel value="male" control={<Radio />}  style={{itemColor:"red"}}  label="Male" />
  </RadioGroup>
</FormControl>
                      </div>
                    </fieldset>
                  </div>
                  <div className="col-md-6" >
                      <div className="form-group" >
                      <div style={{paddingTop:"15px"}}>
      <TextField
        id="date"
        label="Date of Birth"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
                      </div>
                    </div>
      
                    <div className="col-md-12" >
                      <div className="form-group" >
                        <label htmlFor='address' >Address</label>
                        <textarea  className="form-control" id="address" name='address'  rows="4"/>
                        <span id='available'></span>
                      </div>
                    </div>
  
                </div>
                </div>
              {/* display images */}
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <div    className='text-align' >
                      <div id="image-upload">
                        <div id="teen-img">
                         <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="avatarv img" className='imgsize'/>
  
  
                        </div>
                        <br></br>
                        <div className="input-group ">
                          <span className="input-group-btn">
                          <span className="btn btn-info btn-file ">
                            ChooseImage(4x6)<input type="file" id="imginp" name='file_img' />
  
                          </span>
                          </span>
                        {/* <input type="text" className='form-control' readOnly /> */}
                          
                        </div>
  
                      </div>
   
                    </div>
                    {/* Department */}
  
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor='department' >Department</label>
                        <select className='form-control' id="department" name='department'>
                          <option>choose Departmet</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
             
  
                </div>
                   {/* salary */}
                   <div >
                   <div className="col-md-4">
                  <div className="form-group">
                      <select className='form-control' id="salary" required="true">
                      <option>choose salary</option>
                      </select>
                    </div>
                  </div>
  
                  <br></br>
                  {/* btn */}
                  <div className="col-md-12" style={{textAlign:"center"}}>
                    <input type="submit" id='btn' name='btn' value='Insert' className='btn btn-primary'  />
                    &nbsp;&nbsp;
                    <input type="submit" id='btn' name='btn' value='Cancel' className='btn btn-warning '  />
                    &nbsp;&nbsp;
                   <button  id='btn' onClick={refresh}  className='btn btn-success ' > Refresh</button>
  
  
                  </div>
              
                  </div>
              </div>
              </form>
           </div>
         </div>
         <br></br>
      </div>  
     </div>  
     </div> 
     
   </div>
  
    )
}

export default EmployeeForm
