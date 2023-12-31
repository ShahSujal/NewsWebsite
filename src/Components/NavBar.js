import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Layout from '../containers/Layout'
export class NavBar extends Component {

  render() {
    return (
      <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#" style={{color:"#FFFFFF"}}>IndoNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        {/* <li><Link className="nav-link" to="/">general</Link></li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li><Link className="nav-link" to="/science">science</Link></li>
        <li><Link className="nav-link" to="/business">buisness</Link></li>
        <li><Link className="nav-link" to="/entertainment">entertainment</Link></li>
        <li><Link className="nav-link" to="/health">health</Link></li>
        {/* <li> <a className="nav-link" to="#">science</a></li> */}
        <li> <Link className="nav-link" to="/sports">sports</Link></li>
        <li> <Link className="nav-link" to="/technology">technology</Link></li>
      </ul>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2 bg-dark lg" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</nav>
      </>
    )
  }
}

export default NavBar