import React, { Component } from 'react';
import { ListView } from './ListView';

export class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      field: "name",
      value: ""
    };

    this.filter = this.filter.bind(this);
    this.setField = this.setField.bind(this);
  }

  render() {
    let jsx = <div>
      <div>Field: <select onChange={this.setField}>
        <option value="name">Name</option>
        <option value="designation">Designation</option>
        <option value="project">Project</option>
      </select></div>
      <div>Value: <input type="text" onChange={this.filter} /></div>
      <br/>
      <ListView field={this.state.field} value={this.state.value} />
    </div>;
    return (
      jsx
    );
  }

  setField(event) {
    this.setState({ field: event.target.value });
  }

  filter(event) {
    this.setState({ value: event.target.value });
  }
}
