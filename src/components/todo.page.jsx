import React from "react";

import InputComponent from "./input.component";
import ListComponent from "./list.component";
import NavBar from "./navbar.component";

const TodoPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <InputComponent />
            <ListComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
