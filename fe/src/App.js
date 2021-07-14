import Navbar from "./Navbar";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Form from "./Form";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Form} />
        <Route path="/product/:id" component={Form} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
