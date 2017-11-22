import React from "react";
import "./Item.css";

let Item = (props) => (<div>
  <h1>{props.data.title}</h1>

  <img src={props.data.url}/>
  <h3>{props.data.description}</h3>
  <button className="btn btn-danger" onClick={props.handleRemove}>Remove</button>
</div>)
export default Item;
