import './App.css';
import Page1 from "./components/page-1/Page1";
import Page2 from "./components/page-2/Page-2";
import Page3 from "./components/page-3/Page3"
import React, { useState } from "react"
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import Context from "./AppContext"
import SpecificData from "./components/specificComp/SpecificData"


function App() {
  const [querries,setQuerries] = useState([])

  return (<Context.Provider value={{querries,setQuerries}}>
    <Router>
      <header className="app-header">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
            home
            </Link>
          </li>
          <li>
          <Link to="/page2" style={{ textDecoration: "none" }}>
              translated links
            </Link>
          </li>
          <li>
          <Link to="/page3" style={{ textDecoration: "none" }}>
                awaiting links
            </Link>
          </li>
        </ul>
      </header>
      <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/page2" exact component={Page2} />
          <Route path="/page3" exact component={Page3} />
          <Route path="/translation/:id" exact component ={SpecificData}/>
        </Switch>
    </Router>
      </Context.Provider>
  );
}

export default App;
