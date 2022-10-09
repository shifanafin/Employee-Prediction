import React from "react";
import "./demo.css"
import "./core.css"
import "./theme-default.css"
import * as Icon from 'react-bootstrap-icons';
import {NavLink} from "react-router-dom"


function SideBar() {
  return (
    <div className="mainbody" >

    






<div className="layout-wrapper layout-content-navbar "  >
  <div className="layout-container " >
    {/* Menu */}
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" >
      <div className="app-brand demo"  >
       
      <span className="app-brand-text demo menu-text fw-bolder  "  style={{color:"#23a394"}}> <Icon.PersonBadgeFill /> <span style={{textTransform:"uppercase"}}>L</span>iwet</span>

        <a  className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <div className="menu-inner-shadow"  />
      <ul className="menu-inner py-1 " >
        {/* Dashboard */}
        <li className="menu-item " >
          <NavLink to="/"  className="menu-link  presence"   style={{color:"#23a394" }}  >
            <i className="menu-icon tf-icons   " />
          <Icon.Window  />
            
            <div data-i18n="Analytics  "  ck> Dashboard</div>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="menu-link presence" style={{color:"#23a394"}}>
          <i className="menu-icon " />

            <Icon.PersonSquare/>
            <div data-i18n="Analytics">Account Setting</div>
          </NavLink>
        </li>
        {/* Layouts */}
        <li className="menu-item">
          <NavLink to="/" className="menu-link presence" style={{color:"#23a394"}}>
          <i className="menu-icon " />
            <Icon.Newspaper/>
            <div data-i18n="Layouts">Recent Updates</div>
          </NavLink>
        </li>
        <li className="menu-header small text-uppercase" style={{color:"#23a394"}}>
          <span className="menu-header-text" >Pages</span>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="menu-link presence" style={{color:"#23a394"}}>
            <i className="menu-icon tf-icons bx bx-dock-top" />
          <Icon.Building/>
            <div data-i18n="Account Settings">company report</div>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="menu-link presence" style={{color:"#23a394"}}>
            <i className="menu-icon tf-icons bx bx-lock-open-alt" />
            <Icon.LaptopFill/>
            <div data-i18n="Authentications">Software Report</div>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="menu-link presence" style={{color:"#23a394"}}>
            <i className="menu-icon tf-icons bx bx-cube-alt" />
            <Icon.BriefcaseFill/>
            <div data-i18n="Misc">Acconting report</div>
          </NavLink>
        </li>
        
        <li className="menu-item">
          <NavLink to="/"  className="menu-link presence" style={{color:"#23a394"}}>
            <i className="menu-icon tf-icons bx bx-cube-alt" />
            <Icon.PersonBadgeFill/>
            <div data-i18n="Misc">Client report </div>
          </NavLink>
        </li>
        {/* Components */}
        <li className="menu-header small text-uppercase" style={{color:"#23a394"}}><span className="menu-header-text">Components</span></li>
        {/* Cards */}
        <li className="menu-item">
          <NavLink to="/EmployeeForm" className="menu-link presence" style={{color:"#23a394"}}>
            <i className="menu-icon tf-icons bx bx-collection" />
            <Icon.PeopleFill/>
            <div data-i18n="Basic">Employee Details</div>
          </NavLink>
        </li>
       
        <li className="menu-item">
          <NavLink to="/"  className="menu-link presence"  style={{color:"#23a394"}}>
            <i className="menu-icon tf-icons bx bx-copy" />
            <Icon.FileCheckFill/>
            <div data-i18n="Extended UI">Daily Report</div>
          </NavLink>
        </li>


        {/* Extended components */}
        <li className="menu-item">
          <NavLink  to="/" className="menu-link presence"  style={{color:"#23a394"}}>
            <i className="menu-icon tf-icons bx bx-copy" />
            <Icon.CalendarFill/>
            <div data-i18n="Extended UI">Calender</div>
          </NavLink>
        </li>
      
      </ul>
    </aside>
  </div>
</div>



    </div>
  );

  
}

export default SideBar;
