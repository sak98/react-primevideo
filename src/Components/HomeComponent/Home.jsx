import React, { Component,Fragment } from 'react';
import "./Home.Styles.css";
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>                   
                <div className="container">
                    <h1>This is a container </h1>
                </div>
            </Fragment>
         );
    }
}
 
export default HomeComponent;