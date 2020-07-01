import React, { Component, Fragment } from "react";
import "./Header.styles.css";
import { Link,withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from '../../firebase'

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user :" ",
    };
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/");
        toast.success("succussfully logout");
      })
      .catch((err) => toast.error(err.message));
  }
    
  



  render() {
    let { photoURL, displayName, email } = this.props.user;
    let AnonymousUser = () => {
      return (
        <Fragment>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </Fragment>
      );
    };

    let AuthUser = () => {
      return (
        <Fragment>
           <li className="nav-item">
            <Link className="nav-link" to="/add-movie">
              Add Movie
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/upload-video">
              Upload Video
            </Link>
            </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {email}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={this.signOut}>
              Logout
            </a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img
                src={photoURL}
                alt="displayName"
                className="img-circle profile_img"
              />
            </a>
          </li>
        </Fragment>
      );
    };

    return (
      <Fragment>
        <nav className="navbar navbar-default navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            <img src="primevideo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {this.props.user.emailVerified ? <AuthUser /> : <AnonymousUser />}
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default withRouter(HeaderComponent);
