import React, {Component} from 'react';
import './Layout.css';
import PathViz from './PathfindingVisualizer/pathviz.jsx';
export default class VizGrid extends Component {
  render() {
    return (
      <div className="vizgrid">
        <h1>{this.props.heading}</h1>
        <PathViz></PathViz>
      </div>
    );
  }
}
