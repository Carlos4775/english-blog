import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sobrenosotros">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
