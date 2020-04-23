import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
