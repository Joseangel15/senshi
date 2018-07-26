import React, {Component} from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Navigation extends Component{
    constructor(){
        super()

        this.state = {
            showNav: false
        }


    }

    toggleNav() {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    logout() {
        axios.get('/api/logout')
    }
    
    render() {


        const navMenuStyle = {
            width: '0px',
            margin: '15px',
            textDecoration: 'none',
            color: 'rgb(150, 0, 0)'
        }

        const linkColor = {
            textDecoration: 'none',
            color: 'rgb(150, 0, 0)'
        }

        return (
            <div>
       <header>
         <nav>
         <Link to='/Home'><h2>SENSHI</h2></Link>
          <div className='good-burger' onClick={() => this.toggleNav()}>
            <div className='ingredients'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
            <div className='nav-menu'>
              <Link to='/Home'><h3 style={linkColor}>Home</h3></Link>
              <Link to='/Account_Page'><h3 style={linkColor}>Account</h3></Link>
              <h3 style={linkColor}>Store</h3>
              <Link to='/About'><h3 style={linkColor}>About</h3></Link>
              <Link to='/'><h3 style={linkColor}>Logout</h3></Link>
            </div>
         </nav>
       </header>
       <div className={this.state.showNav ? `show-nav mobile-nav` : ` ` + `mobile-nav`}>
        <div className="mobile-nav-content">
          <Link to='/Home'><h3 style={navMenuStyle}>Home</h3></Link>
          <Link to='/Account_Page'><h3 style={navMenuStyle}>Account</h3></Link>
          <h3 style={navMenuStyle}>Store</h3>
          <Link to='/About'><h3 style={navMenuStyle}>About</h3></Link>
          <a href={`${window.origin}/api/logout`}>
            <h3 style={navMenuStyle}>Logout</h3>
          </a>
        </div>
       </div>

          <div className="perspective">
          </div>
      </div>
        )
    }

}

export default Navigation;