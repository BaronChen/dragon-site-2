import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DragonBody from './components/DragonBody/DragonBody';

function Index() {
  return (
    <>
      <h2>Dragons</h2>
      <DragonBody selectSection={(header) => { alert(header) }}/>
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}

        <Route path="/" exact component={Index} />
  
      </div>
    </Router>
  );
}

export default App;
