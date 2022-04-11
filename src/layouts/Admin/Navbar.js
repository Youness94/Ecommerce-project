import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <nav classnamename="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    {/* Navbar Brand */}
      <Link classnamename="navbar-brand ps-3" to="/admin">Start Bootstrap</Link>
      {/* Sidebar Toggle */}
      {/* <button classnamename="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i classnamename="fas fa-bars"></i></button> */}
      {/* Navbar Search */}
      {/* <form classname="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div classname="input-group">
              <input classname="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
              <button classname="btn btn-primary" id="btnNavbarSearch" type="button"><i classname="fas fa-search"></i></button>
          </div>
      </form> */}
      {/* Navbar */}
      {/* <ul classname="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li classname="nav-item dropdown">
              <Link classname="nav-link dropdown-toggle" id="navbarDropdown" to="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i classname="fas fa-user fa-fw"></i></Link>
              <ul classname="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><Link classname="dropdown-item" to="#!">Settings</Link></li>
                  <li><Link classname="dropdown-item" to="#!">Activity Log</Link></li>
                  <li><hr classname="dropdown-divider" /></li>
                  <li><Link classname="dropdown-item" to="#!">Logout</Link></li>
              </ul>
          </li>
      </ul> */}
  </nav>
  )
}

export default Navbar