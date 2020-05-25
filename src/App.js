import React from 'react';
import './App.css';
//import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Pathviz from './PathfindingVisualizer/pathviz';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import VizGrid from './VizGrid';
import sidemenuItems from './sidemenuItems.json';
import './Layout.css';
/*
    <Switch>
      <Route exact path="/">
        <Header heading="Home"></Header>
      </Route>
      <Route path="/dfs">
        <Header heading="dfs"></Header>
      </Route>
      <Route path="/dijkstra">
        <Header heading="dijkstra"></Header>
      </Route>
    </Switch>
*/

function handleRoutes(children) {
  return children.map(subOption => {
    if (!subOption.children) {
      return (
        <div key={subOption.name}>
          <Route path={subOption.url}>
            <Header heading={subOption.heading}></Header>
            <Body heading={subOption.heading}></Body>
            <VizGrid heading={subOption.heading}></VizGrid>
          </Route>
        </div>
      );
    } else {
      return handleRoutes(subOption.children);
    }
  });
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <Route exact path="/">
          <Header heading="Home"></Header>
          <Body heading="Home"></Body>
        </Route>
        {handleRoutes(sidemenuItems.data)}
      </div>
    </Router>
  );
}
export default App;
