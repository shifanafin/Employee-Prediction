import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../HrLogin/HrLogin.css"
import Dashboard from "../../dashboard/DashboardMain/Dashboard"

function HrLogin() {


   function hrLogin()
    {
        console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			signupBtn.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
});



signupBtn.addEventListener("click", (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			loginBtn.parentNode.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
});


    }

  return (
    <div className='hrLogin'>

<div  className="form-structor">
  <div className="signup">
    <button onClick={hrLogin} className="form-title" id="signup"><span>or</span>Sign up</button>
    <div className="form-holder">
      <input type="text" className="input" placeholder="Name" />
      <input type="email" className="input" placeholder="Email" />
      <input type="password" className="input" placeholder="Password" />
    </div>
   
    <button  className="submit-btn">Sign up</button>
  
  </div>
  <div className="login slide-up">
    <div className="center">
      
      <button onClick={hrLogin} className="form-title" id="login"><span>or</span>Log in</button>
      
      <div className="form-holder">
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
      </div>
      <Link  to="/Dashboard" >
      <button className="submit-btn">Log in</button>
      </Link>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default HrLogin
