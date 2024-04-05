import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive ? "nav-link green" : "nav-link"}}  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={(e)=>{return e.isActive ? "nav-link green" : "nav-link"}}  to="/post">Post</NavLink>

        </li>
        <li className="nav-item">
        <NavLink className={(e)=>{return e.isActive ? "nav-link green" : "nav-link"}}  to="/comments">Comments</NavLink>

        </li>
        <li className="nav-item">
        <NavLink className={(e)=>{return e.isActive ? "nav-link green" : "nav-link"}}  to="/albums">Albums</NavLink>

        </li>
        <li className="nav-item">
        <NavLink className={(e)=>{return e.isActive ? "nav-link green" : "nav-link"}}  to="/photos">Photos</NavLink>

        </li>
        <li className="nav-item">
        <NavLink className={(e)=>{return e.isActive ? "nav-link green" : "nav-link"}}  to="/todos">Todos</NavLink>

        </li>
        <li className="nav-item">
        <NavLink className={(e)=>{return e.isActive ? "nav-link green" : "nav-link"}}  to="/users">Users</NavLink>

        </li>
      </ul>
    </div>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </div>
</nav>
    </>
  )
}

export default Navbar;