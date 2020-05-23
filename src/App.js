import React from 'react';
import './App.css';
//import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Pathviz from './PathfindingVisualizer/pathviz';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pathviz></Pathviz>
    </div>
  );
}

export default App;
