import React from "react";
import "./Form.css";

let Form = (props) => (

      <div>

      <form onSubmit={props.handleSubmit}>
        <div className="row mt-4 text-center mx-2">
          <div className="col md-4">
            <input type="text" placeholder="Title" name="title" value={props.title} onChange={props.handleChange}/>
          </div>
          <div className="col md-4">
            <input type="text" placeholder="Image Url" name="url"  value={props.url} onChange={props.handleChange}/>
          </div>
          <div className="col md-4">
            <input type="text" placeholder="Description" name="description" value={props.description} onChange={props.handleChange}/>
          </div>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-button ">Submit</button>
        </div>
      </form>
      </div>


)
export default Form;
