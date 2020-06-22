import React, { Component, Fragment } from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-default navbar-expand-lg navbar-dark ">
          <Link className="navbar-brand" to="/">
            <img src="/primevideo.png" alt="prime-video"/>
          </Link>
          
            
          <div className="collapse d-flex justify-content-end navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  Sign-Up
                </Link>
              </li>
              
            </ul>
            
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default HeaderComponent;
