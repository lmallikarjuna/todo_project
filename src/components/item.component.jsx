import React from "react";
import { connect } from "react-redux";

import { deleteItem } from "../redux/actions/deleteItem.action";

const ItemComponent = ({ description, id, deleteItem }) => {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{description}</h6>
      <div className="todo-icon">
        <button onClick={() => deleteItem(id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default connect(null, { deleteItem })(ItemComponent);
