import React,{Fragment} from 'react'
import "./PagenotFound.styles.css"
function PageNotFoundComponent() {
    return (
        <Fragment>
            <div className="container  justify-content-center">
            <h1 style={{color:'red', fontSize:'50px',}}>Oops page not found d punda </h1> 
            <p style={{color:'red', fontSize:'50px',}}>404</p>
            </div>
        </Fragment>
    )
}

export default PageNotFoundComponent
