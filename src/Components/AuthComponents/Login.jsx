import React, { Component, Fragment } from 'react';
import "./Auth.Styles.css";
import {Link,withRouter} from "react-router-dom";
import firebase from "../../firebase";
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username : "",
            email : "",
            password : "",
         }

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    async handleSubmit(e){
       
        let  {email,password} = this.state;
        try {    
            e.preventDefault();    
          let userdata = await firebase.auth().signInWithEmailAndPassword(email,password);
            if(userdata.user.emailVerified){
                this.props.history.push("/");
                toast.success("Logged in successfully");
            }
            else{
                toast.error("Problem Logging in Please verify your email");
            }

        } catch (err){
            toast.error(err.message);
        }
        this.state = { 
            username : "",
            email : "",
            password : "",

         }
    }




    render() { 
        return ( 
            <Fragment>
                <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
              <div className=" col-md-3 mx-auto">
                <img src="AV_Logo.png" alt="logo" className="inside_logo my-4" />
    
                <div className="card-body card">
                  <h1 className="h4">Sign-In </h1>
                  <form onSubmit={this.handleSubmit}>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <Link to="/password-reset">Forgot pasword?</Link>
                    <div className="form-group">
                      <button  className="a-button-primary btn-block my-4">
                        Sign-In
                      </button>
                    </div>
                    <hr />
                    <p>
                      By creating an account, you agree to Amazon's Conditions of
                      Use and Privacy Notice.
                    </p>
                    <legend >New To Amazon ?</legend>
                    <div className="form-group">
                      <button  className="a-button-light btn btn-light btn-block my-4">
                        <Link to="/register">Create a New Account</Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            </Fragment>
         );
    }
}
 
export default withRouter(LoginComponent);