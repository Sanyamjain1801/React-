import React from "react";
import "./Navbar.css";
// import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    //     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    //     <div className="container-fluid">
    //     <a className="navbar-brand" href="/">{props.title}</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/About">About</a>
    //         </li>
    //       </ul>
    //       {/* <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button className="btn btn-outline-primary" type="submit">Search</button>
    //       </form> */}
    //         <div className="form-check form-switch  mx-3">
    //             <input className="form-check-input" type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
    //             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    //         </div>

    //         <div>
    //         <a className="btn btn-primary mx-2" role="button" href="/login">login</a>
    //         <a className="btn btn-primary mx-2" role="button" href="/Signup">SignUp</a>
    //         </div>

    //     </div>
    //   </div>
    // </nav>
    <>
      <nav className="topnav">
        <a href="/" className="new">
          Admin Page
        </a>
        <a href="/manual" className="new1">
          Manual Testing
        </a>
        <a href="automation" className="new2">
          Automation Testing
        </a>
      </nav>
    </>
  );
}
