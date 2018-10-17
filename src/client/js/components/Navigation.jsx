import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn, username } = this.props;
    console.log(isLoggedIn);
    const listingButton = isLoggedIn ? <div><NavLink to="/" className="menu-box"><span className="menu-text">Listing</span></NavLink><NavLink to="/" className="menu-box"><span className="menu-text">About</span></NavLink></div>  : '';
    const logInOutButton = isLoggedIn ?
      <div className="nav-item nav-button-item"><button className="navButton" onClick={() => { this.props.logoutUser(); }}>Logout</button></div> :
      <div className="nav-item nav-button-item"><NavLink to="/login"><button className="navButton">Login</button></NavLink></div>;
    const navUsername = isLoggedIn ? <div className="nav-item nav-user-item"><span id="loginuser-text">Welcome, {this.props.username}</span></div> : '';
    const signUpButton = isLoggedIn ? '' : <div className="nav-item nav-button-item"><NavLink to="/signup"><button className="navButton">Sign Up</button></NavLink></div>;
    return (
      <div className="navigation">
        <div id="logo-container">
          <img id="logo" src="http://res.cloudinary.com/paulsg10/image/upload/v1539456790/zwyb03ok1hsidmcyo87a.jpg" id="logo" />
          <h3 id="title">SneakerSmith</h3>
        </div>
        <div id="menu-container">
          <div id="left-menu">
            {listingButton}
          </div>
          <div id="right-menu">
            {navUsername}
            {logInOutButton}
            {signUpButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
