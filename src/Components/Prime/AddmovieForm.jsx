import React, { Component, Fragment } from "react";


class AddMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      rating: "",
      language: "",
      type: "",
      price: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }

  handleChange(e){
      this.setState({[e.target.name] : e.target.value});
    
  }

  handleSubmit(e){
        e.preventDefault();
        this.props.addVideo(this.state);
  }

  render() {
    return (
      <Fragment>
       <section >
          <div className=" container my-4 card">
           

            <div className="card-body">
              <h1 className="h4">Enter Movie Details</h1>
              <p style={{ fontSize: "12px" }}>
                Enter the movie Details to upload the information.
              </p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name of the movie: </label>
                  <input type="text" name= "name" value={this.state.name} id ="name" required onChange={this.handleChange} className="form-control"/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Genre:</label>
                  <input type="text" name= "genre" value={this.state.genre} id ="genre" required onChange={this.handleChange} className="form-control"/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Rating: </label>
                  <input type="text" name= "rating" value={this.state.rating} id ="rating" required onChange={this.handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Language: </label>
                  <input type="text" name= "language" value={this.state.language} id ="language" required onChange={this.handleChange} className="form-control"/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Type: </label>
                  <input type="text" name= "type" value={this.state.type} id ="type" required onChange={this.handleChange} className="form-control"/>
                </div>
               

                <div className="form-group">
                  <label htmlFor="name">Price: </label>
                  <input type="text" name= "price" value={this.state.price} id ="price" required onChange={this.handleChange} className="form-control"/>
                </div>

                <div className="form-group">
                  <button className="a-button-primary btn-block my-4">
                    Submit Details
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

export default AddMovieForm;
