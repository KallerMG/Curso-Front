import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Comments from "./Comments";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Comments">
          <Comments />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
