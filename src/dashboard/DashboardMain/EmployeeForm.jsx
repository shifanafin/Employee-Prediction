import React from 'react'
import { NavLink } from 'react-router-dom'

const EmployeeForm = () => {
  return (
    <div>


<div>
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      {/* Menu */}
      <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo">
          
          <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i className="bx bx-chevron-left bx-sm align-middle" />
          </a>
        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          {/* Dashboard */}
          <li className="menu-item">
            <NavLink to="/Dashboard" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle" />
              <div data-i18n="Analytics">Dashboard</div>
            </NavLink>
          </li>
          {/* Layouts */}
         
          <li className="menu-item active open">
            <NavLink to="/EmployeeForm" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-dock-top" />
              <div data-i18n="Account Settings">Account Settings</div>
            </NavLink>
            <ul className="menu-sub">
              <li className="menu-item active">
                <NavLink to="/EmployeeForm" className="menu-link">
                  <div data-i18n="Account">New Account</div>
                </NavLink>
              </li>
              </ul>
              <li className="menu-item">
          <NavLink to="/HRreport" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top" />
            <div data-i18n="Account Settings">Report</div>
          </NavLink>
          
        </li>
    
   
         
            </li>
          
        </ul>
      </aside>
      {/* / Menu */}
      {/* Layout container */}
      <div className="layout-page">
        {/* Navbar */}
        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
              <i className="bx bx-menu bx-sm" />
            </a>
          </div>
          <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            {/* Search */}
            <div className="navbar-nav align-items-center">
              <div className="nav-item d-flex align-items-center">
                <i className="bx bx-search fs-4 lh-0" />
                <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
              </div>
            </div>
            {/* /Search */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* Place this tag where you want the button to render. */}
              <li className="nav-item lh-1 me-3">
                <a className="github-button" href="https://github.com/themeselection/sneat-html-admin-template-free" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themeselection/sneat-html-admin-template-free on GitHub">Star</a>
              </li>
              {/* User */}
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <div className="avatar avatar-online">
                    <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar avatar-online">
                            <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <span className="fw-semibold d-block">John Doe</span>
                          <small className="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-user me-2" />
                      <span className="align-middle">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-cog me-2" />
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 bx bx-credit-card me-2" />
                        <span className="flex-grow-1 align-middle">Billing</span>
                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="auth-login-basic.html">
                      <i className="bx bx-power-off me-2" />
                      <span className="align-middle">Log Out</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ User */}
            </ul>
          </div>
        </nav>
        {/* / Navbar */}
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Account Settings /</span> Account</h4>
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-pills flex-column flex-md-row mb-3">
                  <li className="nav-item">
                    <NavLink to="/EmployeeForm" className="nav-link active" ><i className="bx bx-user me-1" /> Account</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="EmployeeForm" className="nav-link" ><i className="bx bx-bell me-1" /> Notifications</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="EmployeeForm" className="nav-link" ><i className="bx bx-link-alt me-1" /> Connections</NavLink>
                  </li>
                </ul>
                <div className="card mb-4">
                  <h5 className="card-header">Profile Details</h5>
                  {/* Account */}
                  <div className="card-body">
                    <div className="d-flex align-items-start align-items-sm-center gap-4">
                      <img src="../assets/img/avatars/1.png" alt="user-avatar" className="d-block rounded" height={100} width={100} id="uploadedAvatar" />
                      <div className="button-wrapper">
                        <label htmlFor="upload" className="btn btn-primary me-2 mb-4" tabIndex={0}>
                          <span className="d-none d-sm-block">Upload new photo</span>
                          <i className="bx bx-upload d-block d-sm-none" />
                          <input type="file" id="upload" className="account-file-input" hidden accept="image/png, image/jpeg" />
                        </label>
                        <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                          <i className="bx bx-reset d-block d-sm-none" />
                          <span className="d-none d-sm-block">Reset</span>
                        </button>
                        <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body">
                    <form id="formAccountSettings" method="POST" onsubmit="return false">
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="firstName" className="form-label">First Name</label>
                          <input className="form-control" type="text" id="firstName" name="firstName" defaultValue="John" autofocus />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="lastName" className="form-label">Last Name</label>
                          <input className="form-control" type="text" name="lastName" id="lastName" defaultValue="Doe" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="email" className="form-label">E-mail</label>
                          <input className="form-control" type="text" id="email" name="email" defaultValue="john.doe@example.com" placeholder="john.doe@example.com" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="organization" className="form-label">Organization</label>
                          <input type="text" className="form-control" id="organization" name="organization" defaultValue="ThemeSelection" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text">US (+1)</span>
                            <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" placeholder="202 555 0111" />
                          </div>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="address" className="form-label">Address</label>
                          <input type="text" className="form-control" id="address" name="address" placeholder="Address" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="state" className="form-label">State</label>
                          <input className="form-control" type="text" id="state" name="state" placeholder="California" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="zipCode" className="form-label">Zip Code</label>
                          <input type="text" className="form-control" id="zipCode" name="zipCode" placeholder={231465} maxLength={6} />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="country">Country</label>
                          <select id="country" className="select2 form-select">
                            <option value>Select</option>
                            <option value="Australia">Australia</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="language" className="form-label">Language</label>
                          <select id="language" className="select2 form-select">
                            <option value>Select Language</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="pt">Portuguese</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="timeZones" className="form-label">Timezone</label>
                          <select id="timeZones" className="select2 form-select">
                            <option value>Select Timezone</option>
                            <option value={-12}>(GMT-12:00) International Date Line West</option>
                            <option value={-11}>(GMT-11:00) Midway Island, Samoa</option>
                            <option value={-10}>(GMT-10:00) Hawaii</option>
                            <option value={-9}>(GMT-09:00) Alaska</option>
                            <option value={-8}>(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                            <option value={-8}>(GMT-08:00) Tijuana, Baja California</option>
                            <option value={-7}>(GMT-07:00) Arizona</option>
                            <option value={-7}>(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                            <option value={-7}>(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                            <option value={-6}>(GMT-06:00) Central America</option>
                            <option value={-6}>(GMT-06:00) Central Time (US &amp; Canada)</option>
                            <option value={-6}>(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                            <option value={-6}>(GMT-06:00) Saskatchewan</option>
                            <option value={-5}>(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                            <option value={-5}>(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                            <option value={-5}>(GMT-05:00) Indiana (East)</option>
                            <option value={-4}>(GMT-04:00) Atlantic Time (Canada)</option>
                            <option value={-4}>(GMT-04:00) Caracas, La Paz</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="currency" className="form-label">Currency</label>
                          <select id="currency" className="select2 form-select">
                            <option value>Select Currency</option>
                            <option value="usd">USD</option>
                            <option value="euro">Euro</option>
                            <option value="pound">Pound</option>
                            <option value="bitcoin">Bitcoin</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-2">
                        <button type="submit" className="btn btn-primary me-2">Save changes</button>
                        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                      </div>
                    </form>
                  </div>
                  {/* /Account */}
                </div>
                <div className="card">
                  <h5 className="card-header">Delete Account</h5>
                  <div className="card-body">
                    <div className="mb-3 col-12 mb-0">
                      <div className="alert alert-warning">
                        <h6 className="alert-heading fw-bold mb-1">Are you sure you want to delete your account?</h6>
                        <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                      </div>
                    </div>
                    <form id="formAccountDeactivation" onsubmit="return false">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" name="accountActivation" id="accountActivation" />
                        <label className="form-check-label" htmlFor="accountActivation">I confirm my account deactivation</label>
                      </div>
                      <button type="submit" className="btn btn-danger deactivate-account">Deactivate Account</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* / Content */}
          {/* Footer */}
          <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
              <div className="mb-2 mb-md-0">
                ©
                , made with ❤️ by
                <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder">ThemeSelection</a>
              </div>
              <div>
                <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
                <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>
                <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
                <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" className="footer-link me-4">Support</a>
              </div>
            </div>
          </footer>
          {/* / Footer */}
          <div className="content-backdrop fade" />
        </div>
        {/* Content wrapper */}
      </div>
      {/* / Layout page */}
    </div>
    {/* Overlay */}
    <div className="layout-overlay layout-menu-toggle" />
  </div>
  {/* / Layout wrapper */}
  <div className="buy-now">
    <a href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/" target="_blank" className="btn btn-danger btn-buy-now">Upgrade to Pro</a>
  </div>
</div>


      
    </div>
  )
}

export default EmployeeForm
