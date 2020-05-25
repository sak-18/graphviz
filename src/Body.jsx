import React, {Component} from 'react';

export default class Body extends Component {
  render() {
    return (
      <div className="content">
        <h2>{this.props.heading}</h2>
      </div>
    );
  }
}
