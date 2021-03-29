import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./routes/Home";
import Comments from "./routes/Comments";
import CreatePost from "./routes/CreatePost";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/Comments">
          <Comments />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}
export default App;
