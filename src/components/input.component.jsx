import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/addItem.action";

class InputComponent extends React.Component {
  state = {
    inputValue: "",
  };

  onChangeHandle = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    return (
      <div className="card card-body my-3">
        <form onSubmit={this.onSubmitHandle}>
          <div className="input-group">
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.onChangeHandle}
              className="form-control text-capitalize"
              placeholder="Enter description"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addItem })(InputComponent);
