import './App.css';
import Page1 from "./components/page-1/Page1";
import Page2 from "./components/page-2/Page-2"
import React from "react"
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";


function App() {
  return (<>
    <Router>
      <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/links2" exact component={Page2} />
        </Switch>
    </Router>
      </>
  );
}

export default App;
