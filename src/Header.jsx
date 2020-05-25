import React, {Component} from 'react';
import './Layout.css';
export default class Header extends Component {
  render() {
    return (
      <div className="heading">
        <h1>{this.props.heading}</h1>
      </div>
    );
  }
}
