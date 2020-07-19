import React from 'react'
import {Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg'

const HeaderNavbar=()=>{
    return(
      <Navbar  variant="dark" style={{height:70,backgroundColor:"#01856c"}}>
        <Navbar.Brand href="#home" >
                <img
        alt=""
        src={logo}
        width="80"
        height="100"
      />{' '}
      Movie RatingList
    </Navbar.Brand>
  </Navbar>
    )
}

export default HeaderNavbar