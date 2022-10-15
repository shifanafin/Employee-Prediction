import React from 'react'
import "../animation.css"
import {NavLink,Link} from "react-router-dom"
import TypewriterComponent from 'typewriter-effect'

function Hero() {
  return (
    

    <div>

<main  id="main">
{/* ======= Hero Section ======= */}
<section  id="hero" className="hero">
  <div  className="container position-relative">
    <div   className="row gy-5" data-aos="fade-in">
      <div  className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
        <h2 style={{marginBottom:"50px"}}>Go further with <span>
           <TypewriterComponent
        options={{
          autoStart  : true,
          loop:true,
          delay : 80,
          strings:
          [
            " Liwet Software",
            "Erp SoftWare "
          ]
        }}
        />
        </span>
        <h4 style={{paddingTop:"20px", color:"white"}}>Bring the operations and team together.
        Adapt and innovate with the only profito </h4>
      </h2>
      
    
        {/* <div style={{paddingLeft:"100px" }} className="d-flex justify-content-center justify-content-lg-start">
          <NavLink to="/AdminLogin"  className="btn-get-started">Admin Login</NavLink>
         
        </div> */}
      </div>
      <div  className=" moveArrow  col-lg-6 order-1 order-lg-2">
        <img src="assets/img/erp2.png" className="img-fluid" alt="erp software" data-aos="zoom-out" data-aos-delay={100} />
      </div>
    </div>
  </div>
 
  <div className="icon-boxes position-relative">
    <div className="container position-relative">

      <div className="row gy-4 mt-5">

        <div  className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
          <Link to="/HrLogin">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-briefcase" /></div>
            <h4 className="title"><a href className="stretched-link">HR Department</a></h4>
          </div>
          </Link>
        </div>
        
        
        {/*End Icon Box */}
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
         <Link to="/Accounting">
          <div  className="icon-box">
            <div className="icon"><i className="bi bi-calculator" /></div>
            <h4 className="title"><a href className="stretched-link">Accounting Department</a></h4>
          </div>
          </Link>
        </div>
        {/*End Icon Box */}
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
          <Link to="/ProjectLogin">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-microsoft-teams" /></div>
            <h4 className="title"><a href className="stretched-link">Project Department</a></h4>
          </div>
          </Link>
        </div>
        {/*End Icon Box */}
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={500}>
        <Link to="/EmployeeLogin">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-person" /></div>
            <h4 className="title"><a href className="stretched-link">Employee</a></h4>
          </div>
          </Link>
        </div>
        {/*End Icon Box */}
      </div>
    </div>
  </div>
</section>
{/* End Hero Section */}

      </main>
    </div>
  )
}

export default Hero
