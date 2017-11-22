import React from "react";
import ItemList from "./ItemList.js";
import {connect} from "react-redux";



class ItemListContainer extends React.Component {
  render() {
    return (
      <div>
        <ItemList data={this.props.items} />
      </div>
    )
  }
}

export default connect((state) => state)(ItemListContainer);
