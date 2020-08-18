import React from "react";
import { connect } from "react-redux";

import ItemComponent from "./item.component";
import { clearList } from "../redux/actions/clearList.action";

const ListComponent = ({ store, clearList }) => {
  return (
    <ul className="list-group my-5">
      <h2 className="text-capitalize text-center">Todo List</h2>
      {store.itemList.map((item) => {
        console.log(item.id);
        return (
          <ItemComponent key={item.id} id={item.id} description={item.itemDescription} />
        );
      })}
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        Clear List
      </button>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    store: state.store,
  };
};

export default connect(mapStateToProps, { clearList })(ListComponent);
