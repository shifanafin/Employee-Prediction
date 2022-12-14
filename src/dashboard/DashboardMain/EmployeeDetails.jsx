import React from 'react'

const EmployeeDetails = () => {
  return (
    <div>

<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo">
            <svg width={25} viewBox="0 0 25 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <path d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z" id="path-1" />
                <path d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z" id="path-3" />
                <path d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z" id="path-4" />
                <path d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z" id="path-5" />
              </defs>
              <g id="g-app-brand" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                  <g id="Icon" transform="translate(27.000000, 15.000000)">
                    <g id="Mask" transform="translate(0.000000, 8.000000)">
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1" />
                      </mask>
                      <use fill="#696cff" xlinkHref="#path-1" />
                      <g id="Path-3" mask="url(#mask-2)">
                        <use fill="#696cff" xlinkHref="#path-3" />
                        <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-3" />
                      </g>
                      <g id="Path-4" mask="url(#mask-2)">
                        <use fill="#696cff" xlinkHref="#path-4" />
                        <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-4" />
                      </g>
                    </g>
                    <g id="Triangle" transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) ">
                      <use fill="#696cff" xlinkHref="#path-5" />
                      <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-5" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
        </a>
        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li className="menu-item">
          <a href="index.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics">Dashboard</div>
          </a>
        </li>
        {/* Layouts */}
    
       
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top" />
            <div data-i18n="Account Settings">Account Settings</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-account-settings-account.html" className="menu-link">
                <div data-i18n="Account">New Account</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-notifications.html" className="menu-link">
                <div data-i18n="Notifications">HR Report</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-connections.html" className="menu-link">
                <div data-i18n="Connections">Account Report</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-lock-open-alt" />
            <div data-i18n="Authentications">Authentications</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-login-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Login</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-register-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Register</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Forgot Password</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-cube-alt" />
            <div data-i18n="Misc">Misc</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-misc-error.html" className="menu-link">
                <div data-i18n="Error">Error</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-under-maintenance.html" className="menu-link">
                <div data-i18n="Under Maintenance">Under Maintenance</div>
              </a>
            </li>
          </ul>
        </li>
        {/* Components */}
        <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>
        {/* Cards */}
        <li className="menu-item">
          <a href="cards-basic.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-collection" />
            <div data-i18n="Basic">Cards</div>
          </a>
        </li>
        {/* User interface */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-box" />
            <div data-i18n="User interface">User interface</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="ui-accordion.html" className="menu-link">
                <div data-i18n="Accordion">Accordion</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-alerts.html" className="menu-link">
                <div data-i18n="Alerts">Alerts</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-badges.html" className="menu-link">
                <div data-i18n="Badges">Badges</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-buttons.html" className="menu-link">
                <div data-i18n="Buttons">Buttons</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-carousel.html" className="menu-link">
                <div data-i18n="Carousel">Carousel</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-collapse.html" className="menu-link">
                <div data-i18n="Collapse">Collapse</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-dropdowns.html" className="menu-link">
                <div data-i18n="Dropdowns">Dropdowns</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-footer.html" className="menu-link">
                <div data-i18n="Footer">Footer</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-list-groups.html" className="menu-link">
                <div data-i18n="List Groups">List groups</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-modals.html" className="menu-link">
                <div data-i18n="Modals">Modals</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-navbar.html" className="menu-link">
                <div data-i18n="Navbar">Navbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-offcanvas.html" className="menu-link">
                <div data-i18n="Offcanvas">Offcanvas</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                <div data-i18n="Pagination & Breadcrumbs">Pagination &amp; Breadcrumbs</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-progress.html" className="menu-link">
                <div data-i18n="Progress">Progress</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-spinners.html" className="menu-link">
                <div data-i18n="Spinners">Spinners</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-tabs-pills.html" className="menu-link">
                <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-toasts.html" className="menu-link">
                <div data-i18n="Toasts">Toasts</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-tooltips-popovers.html" className="menu-link">
                <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-typography.html" className="menu-link">
                <div data-i18n="Typography">Typography</div>
              </a>
            </li>
          </ul>
        </li>
        {/* Extended components */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-copy" />
            <div data-i18n="Extended UI">Extended UI</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="extended-ui-text-divider.html" className="menu-link">
                <div data-i18n="Text Divider">Text Divider</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="icons-boxicons.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-crown" />
            <div data-i18n="Boxicons">Boxicons</div>
          </a>
        </li>
        {/* Forms & Tables */}
        <li className="menu-header small text-uppercase"><span className="menu-header-text">Forms &amp; Tables</span></li>
        {/* Forms */}
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-detail" />
            <div data-i18n="Form Elements">Form Elements</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="forms-basic-inputs.html" className="menu-link">
                <div data-i18n="Basic Inputs">Basic Inputs</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="forms-input-groups.html" className="menu-link">
                <div data-i18n="Input groups">Input groups</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-detail" />
            <div data-i18n="Form Layouts">Form Layouts</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="form-layouts-vertical.html" className="menu-link">
                <div data-i18n="Vertical Form">Vertical Form</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="form-layouts-horizontal.html" className="menu-link">
                <div data-i18n="Horizontal Form">Horizontal Form</div>
              </a>
            </li>
          </ul>
        </li>
        {/* Tables */}
        <li className="menu-item active">
          <a href="tables-basic.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-table" />
            <div data-i18n="Tables">Tables</div>
          </a>
        </li>
        {/* Misc */}
        <li className="menu-header small text-uppercase"><span className="menu-header-text">Misc</span></li>
        <li className="menu-item">
          <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" className="menu-link">
            <i className="menu-icon tf-icons bx bx-support" />
            <div data-i18n="Support">Support</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="menu-link">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Documentation">Documentation</div>
          </a>
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
              ??
              , made with ?????? by
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

export default EmployeeDetails
