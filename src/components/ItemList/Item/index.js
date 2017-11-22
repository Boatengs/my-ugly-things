import React from "react";
import Item from "./Item.js";
import {connect} from "react-redux";
import {removeItem, addItem} from "../../../actions";

class ItemContainer extends React.Component {
  constructor(){
    super();
      this.state  = {
      title: "",
      description: "",
      url: ""
    }
  this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeItem(this.props.index)
  }
  // handleChange(e) {
  //   e.persist();
  //   this.setState((prevState) =>({
  //     [e.target.name]: e.target.value
  //   }));
  // }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.updateItem(this.props.title,this.props.url,this.props.description)
  // }

  render() {
    return (
      <Item {...this.props} handleRemove={this.handleRemove} />
    )
  }
}
 export default connect( null, {removeItem})(ItemContainer);
