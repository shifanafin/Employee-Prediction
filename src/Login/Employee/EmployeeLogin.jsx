import React from 'react'
import "../Employee/EmployeeLogin.css"

function EmployeeLogin() {

function anim()
{
    document.querySelector('.img__btn').addEventListener('click', function() {
        document.querySelector('.cont').classList.toggle('s--signup');
      });
}

  return (
    <div className='.back'>

<div className='.back' >
  <br />
  <br />
  <div   className="cont">
    <div className="form sign-in">
      <h2>Welcome</h2>
      <label className='label2'>
        <span>Email</span>
        <input type="email" />
      </label>
      <label  className='label2'>
        <span>Password</span>
        <input type="password" />
      </label>
      <p className="forgot-pass">Forgot password?</p>
      <button type="button" className="submit">Sign In</button>
    </div>
    <div className="sub-cont">
      <div className="img">
        <div className="img__text m--up">
          <h3>Don't have an account? Please Sign up!</h3><h3>
          </h3></div>
        <div className="img__text m--in">
          <h3>If you already has an account, just sign in.</h3><h3>
          </h3></div>
        <div onClick={anim} className="img__btn">
          <span className="m--up">Sign Up</span>
          <span className="m--in">Sign In</span>
        </div>
      </div>
      <div className="form sign-up">
        <h2>Create your Account</h2>
        <label  className='label2'>
          <span>Name</span>
          <input type="text" />
        </label>
        <label  className='label2'>
          <span>Email</span>
          <input type="email" />
        </label>
        <label  className='label2'>
          <span>Password</span>
          <input type="password" />
        </label>
        <button type="button" className="submit">Sign Up</button>
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default EmployeeLogin
