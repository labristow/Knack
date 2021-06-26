import { HashRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Dashboard} path="/dashboard" />
          {/* <Layout> */}
            {/* <Route exact component={Admin} path="/admin/login" /> */}
          {/* </Layout> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
