import React, { Component } from "react";
import "./style.scss";
import royalAsset from "./Data";

const Row = ({ id, name, priority, number, worth, currencies }) => (
  <div className="row">
    <div>{id}</div>
    <div>{name}</div>
    <div>{priority}</div>
    <div>{number}</div>
    <div>{worth}</div>
    <div>{currencies}</div>
  </div>
);

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: royalAsset,
    };
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ data: arrayCopy });
  }

  render() {
    const rows = this.state.data.map((rowData) => <Row {...rowData} />);

    return (
      <div>
        <h1>The Kingdom's Royal Asset</h1>
        <div className="table">
          <div className="header">
            <div onClick={() => this.sortBy("id")}>ID</div>
            <div onClick={() => this.sortBy("name")}>Asset Name</div>
            <div onClick={() => this.sortBy("priority")}>Priority</div>
            <div onClick={() => this.sortBy("number")}>Number</div>
            <div onClick={() => this.sortBy("worth")}>Worth</div>
            <div onClick={() => this.sortBy("currencies")}>Currencies</div>
          </div>
          <div className="body">{rows}</div>
        </div>
      </div>
    );
  }
}
export default Asset;
