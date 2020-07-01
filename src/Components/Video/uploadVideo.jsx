import React, { Component,Fragment } from 'react';
import {Link} from 'react-router-dom';
import "./uploadVideo.styles.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";

class UploadVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            video : "",
            url : "",
            name : "",
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleUploadChange = this.handleUploadChange.bind(this);
         this.UploadVideoSubmit = this.UploadVideoSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    handleUploadChange(e){
        if(e.target.files[0]){
            let uploadVideo = e.target.files[0];
            this.setState({video:uploadVideo});
        }
    }

    UploadVideoSubmit(e){
        e.preventDefault();
        let {video,name} = this.state;

        let uploadVideo = firebase.storage().ref(`/videos/${video.name}`).put(video);
        toast.success("Video Uploaded Successfully");
    }
    render() { 
        return ( 
            <Fragment>
               <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <img src="AV_Logo.png" alt="logo" className="inside_logo my-4" />

            <div className="card-body card">
              <h1 className="h4">Upload Video</h1>
              <p style={{ fontSize: "12px" }}>
               Upload your video to your firebase account associated with your email address or mobile phone 
              </p>
              <form onSubmit={this.UploadVideoSubmit}>
                <div className="form-group">
                  <input
                    type="file"
                    name="upload_video"
                    className="form-control"
                    onChange={this.handleUploadChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="video_title"
                    className="form-control"
                    placeholder="Enter Video title"
                    value={this.state.video_title}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <button className="a-button-primary btn-block my-4">
                    continue
                  </button>
                </div>
                <hr />
                
              </form>
            </div>
          </div>
        </section>
            </Fragment>
         );
    }
}
 
export default UploadVideo;