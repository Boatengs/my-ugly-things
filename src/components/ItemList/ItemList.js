import React from "react";
import "./ItemList.css";
import Item from "./Item";

let ItemList = (props) => (
  <div className="item-list">
  {
    props.data.map((item, index) => (<Item data={item} key={item.title + index} index={index}/>))
  }

</div>
)
export default ItemList;
