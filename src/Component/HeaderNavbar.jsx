import React,{useContext} from 'react'
import {Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg'
import "./card.css"
import {ContextSearch} from "../Record/seachRecord"



const HeaderNavbar=()=>{

        const[name,setname]=useContext(ContextSearch)
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
      
        <input  type="text" 
                onChange={(e)=>setname({value: e.target.value})}
                className="inputtext"
                placeholder="Search by name"
          />
  </Navbar>
    )
}

export default HeaderNavbar