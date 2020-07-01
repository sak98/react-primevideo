import React, { Component,Fragment } from 'react';
import HeaderCompoent from "./Components/HeaderComponents/HeaderComponent"
import {BrowserRouter as Router,Route,Switch,withRouter} from "react-router-dom"
import HomeComponent from "./Components/HomeComponent/Home";
import { ToastContainer } from "react-toastify";
import firebase from "./firebase";
import LoginComponent from "./Components/AuthComponents/Login";
import PasswordReset from "./Components/AuthComponents/PasswordReset";
import RegisterComponent from "./Components/AuthComponents/Register";
import PageNotFound from "./Components/PageNotFound/PageNotFoundComponent";
import AddMovieForm  from  "./Components/Prime/AddmovieForm";
import UploadVideo from "./Components/Video/uploadVideo";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          userData :"",
         }
    }

    

    async componentDidMount(){
      await firebase.auth().onAuthStateChanged((user) => {
        
        if (user) {
          this.setState({ userData: user });
          this.props.history.push("/");
        } else {
          this.setState({ userData: "" });
          this.props.history.push("/login");
        }
      });
    }


    render() {
        return (
          <Fragment>
            <Router>
              <header>
                <HeaderCompoent user = {this.state.userData} />
              </header>
              <ToastContainer />
              <main>
                <Switch>
                  <Route path="/" exact component={HomeComponent} />
    
                  <Route path="/login" exact component={LoginComponent} />
                  <Route path="/register" exact component={RegisterComponent} />
                  <Route path="/password-reset" exact component={PasswordReset} />
                  {this.state.userData.emailVerified ? (<Fragment>
                    <Route path="/add-movie" exact component={AddMovieForm} />
                    <Route path="/upload-video" exact component={UploadVideo} />
                  </Fragment>): null} 
                  <Route path="**" component={PageNotFound} />
                </Switch>
              </main>
            </Router>
          </Fragment>
        );
      }
}
 
export default App;