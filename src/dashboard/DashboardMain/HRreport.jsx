import React from 'react'
import { NavLink } from 'react-router-dom'

const HRreport = () => {
  return (
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
         
          <li className="menu-item ">
            <NavLink to="/EmployeeForm" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-dock-top" />
              <div data-i18n="Account Settings">Account Settings</div>
            </NavLink>
           
              <li className="menu-item active open">
          <NavLink to="/Report" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top" />
            <div data-i18n="Account Settings">Report</div>
          </NavLink>

          <ul className="menu-sub">
              <li className="menu-item active">
                <NavLink to="/HRreport" className="menu-link">
                  <div >HR Report</div>
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink to="/Account" className="menu-link">
                  <div >Account Report</div>
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink to="/ProjectAdmin" className="menu-link">
                  <div>Project Report</div>
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink to="/EmployeeAdmin" className="menu-link">
                  <div >Employee Report</div>
                </NavLink>
              </li>
             
              </ul>
          
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
          <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Tables /</span> Basic Tables</h4>
          {/* Basic Bootstrap Table */}
          <div className="card">
            <h5 className="card-header">Table Basic</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Basic Bootstrap Table */}
          <hr className="my-5" />
          {/* Bootstrap Dark Table */}
          <div className="card">
            <h5 className="card-header">Table Dark</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Bootstrap Dark Table */}
          <hr className="my-5" />
          {/* Bootstrap Table with Header - Dark */}
          <div className="card">
            <h5 className="card-header">Dark Table head</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Bootstrap Table with Header Dark */}
          <hr className="my-5" />
          {/* Bootstrap Table with Header - Light */}
          <div className="card">
            <h5 className="card-header">Light Table head</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead className="table-light">
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Bootstrap Table with Header - Light */}
          <hr className="my-5" />
          {/* Bootstrap Table with Header - Footer */}
          <div className="card">
            <h5 className="card-header">Table Header &amp; Footer</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="table-border-bottom-0">
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          {/* Bootstrap Table with Header - Footer */}
          <hr className="my-5" />
          {/* Bootstrap Table with Caption */}
          <div className="card">
            <h5 className="card-header">Table Caption</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <caption className="ms-4">
                  List of Projects
                </caption>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Bootstrap Table with Caption */}
          <hr className="my-5" />
          {/* Striped Rows */}
          <div className="card">
            <h5 className="card-header">Striped rows</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Striped Rows */}
          <hr className="my-5" />
          {/* Bordered Table */}
          <div className="card">
            <h5 className="card-header">Bordered Table</h5>
            <div className="card-body">
              <div className="table-responsive text-nowrap">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Users</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong>
                      </td>
                      <td>Albert Cook</td>
                      <td>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                            <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                          </li>
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                            <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                          </li>
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                            <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                          </li>
                        </ul>
                      </td>
                      <td><span className="badge bg-label-primary me-1">Active</span></td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                            <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                      <td>Barry Hunter</td>
                      <td>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                            <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                          </li>
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                            <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                          </li>
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                            <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                          </li>
                        </ul>
                      </td>
                      <td><span className="badge bg-label-success me-1">Completed</span></td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                            <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                      <td>Trevor Baker</td>
                      <td>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                            <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                          </li>
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                            <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                          </li>
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                            <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                          </li>
                        </ul>
                      </td>
                      <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                            <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                      </td>
                      <td>Jerry Milton</td>
                      <td>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                            <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                          </li>
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                            <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                          </li>
                          <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                            <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                          </li>
                        </ul>
                      </td>
                      <td><span className="badge bg-label-warning me-1">Pending</span></td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                            <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*/ Bordered Table */}
          <hr className="my-5" />
          {/* Borderless Table */}
          <div className="card">
            <h5 className="card-header">Borderless Table</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Borderless Table */}
          <hr className="my-5" />
          {/* Hoverable Table rows */}
          <div className="card">
            <h5 className="card-header">Hoverable rows</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Hoverable Table rows */}
          <hr className="my-5" />
          {/* Small table */}
          <div className="card">
            <h5 className="card-header">Small Table</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Small table */}
          <hr className="my-5" />
          {/* Contextual Classes */}
          <div className="card">
            <h5 className="card-header">Contextual Classes</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr className="table-default">
                    <td><i className="fab fa-sketch fa-lg text-warning me-3" /> <strong>Sketch Project</strong></td>
                    <td>Ronnie Shane</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-active">
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                    <td>Barry Hunter</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-primary">
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-secondary">
                    <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                    <td>Trevor Baker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-success">
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                    </td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-danger">
                    <td><i className="fab fa-sketch fa-lg text-warning me-3" /> <strong>Sketch Project</strong></td>
                    <td>Sarah Banks</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-warning">
                    <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Custom</strong></td>
                    <td>Ted Richer</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-info">
                    <td>
                      <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Latest Bootstrap</strong>
                    </td>
                    <td>Perry Parker</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular UI</strong></td>
                    <td>Ana Bell</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-dark">
                    <td><i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap UI</strong></td>
                    <td>Jerry Milton</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                          <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                        </li>
                      </ul>
                    </td>
                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                    <td>
                      <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                          <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Contextual Classes */}
          <hr className="my-5" />
          {/* Table within card */}
          <h5 className="mb-4">Table without Card</h5>
          <div className="table-responsive text-nowrap">
            <table className="table card-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Client</th>
                  <th>Users</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                <tr>
                  <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
                  <td>Albert Cook</td>
                  <td>
                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span className="badge bg-label-primary me-1">Active</span></td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                  <td>Barry Hunter</td>
                  <td>
                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span className="badge bg-label-success me-1">Completed</span></td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                  <td>Trevor Baker</td>
                  <td>
                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                  </td>
                  <td>Jerry Milton</td>
                  <td>
                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span className="badge bg-label-warning me-1">Pending</span></td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*/ Table within card */}
          <hr className="my-5" />
          {/* Responsive Table */}
          <div className="card">
            <h5 className="card-header">Responsive Table</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr className="text-nowrap">
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*/ Responsive Table */}
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


    </div>
  )
}

export default HRreport

