import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function NavBar() {
    const { authenticated, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">The Tech Talk!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item"> 
                        <Link to="/" className='nav-link active'>Home</Link> 
                    </li> */}
                    <li className="nav-item"> 
                        <NavLink  className='nav-link' activeclassname="active" to='/' >Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/posts" activeclassname="active" className='nav-link'>Posts</NavLink>
                    </li>
                    <li className="nav-item dropdown"> 
                            {/* <Link to="/posts" className='nav-link'>Posts</Link> */}
                        <button className='dropbtn'>Categories</button>
                        <div className='dropdown-content'>
                        <NavLink to="/posts" activeclassname="active" className='nav-link'>Tech</NavLink>
                        <NavLink to="/posts" activeclassname="active" className='nav-link'>Sports</NavLink>
                        <NavLink to="/posts" activeclassname="active" className='nav-link'>Motorsports</NavLink>
                        </div>
                    </li>
                    

                    {!authenticated && <li className="nav-item"> 
                        <NavLink to="/mylogin" activeclassname="active" className='nav-link'>Login</NavLink>
                    </li>}
                    {!authenticated &&<li className="nav-item"> 
                        <NavLink to="/myregister" activeclassname="active" className='nav-link'>Register</NavLink>
                    </li>}
                    
                    {authenticated &&<li className="nav-item dropdown">
                        <button className="dropbtn">Hello User!</button>
                        <div className="dropdown-content">
                            <NavLink to="/add-post" activeclassname="active" className='nav-link'>Add post</NavLink>
                            <NavLink  activeclassname="aaa" onClick={logout} className='nav-link'>Logout</NavLink>
                        </div>
                    </li>}
                    {authenticated &&<li className="nav-item"> 
                        
                    </li>}
                </ul>
            </div>
        </div>
    </nav>
  )
}