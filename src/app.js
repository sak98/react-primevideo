import React, { Component,Fragment } from 'react';
import HeaderCompoent from "./Components/HeaderComponents/HeaderComponent"
import {BrowserRouter as Router,Route,Switch,withRouter} from "react-router-dom"
import HomeComponent from "./Components/HomeComponent/Home";
import LoginComponent from "./Components/AuthComponents/Login";
import PasswordReset from "./Components/AuthComponents/PasswordReset";
import RegisterComponent from "./Components/AuthComponents/Register";
import PageNotFound from "./Components/PageNotFound/PageNotFoundComponent";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>                
                <Router>
                    <header>
                        <HeaderCompoent/>
                    </header>

                <main className="container">
                    <Switch>
                    <Route path="/" exact component={HomeComponent}  />
                    <Route path="/Login" exact component={LoginComponent}/>
                    <Route  path="/Register" exact component={RegisterComponent} />
                    <Route  path="/PasswordReset" exact component={PasswordReset} />
                    <Route path= "*"  component={PageNotFound} />   
                    </Switch>              
                </main>      

                </Router>
                
            </Fragment>
         );
    }
}
 
export default App;