import Navbar from "./Navbar";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Form from "./Form";
import axios from "axios";

// Login form
import Login from "./Login";

const NotPage = () => {
  return <h2>404, Page not found</h2>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  componentDidMount = () => {
    this.checkLogin();
  };

  checkLogin = () => {
    if (!localStorage.token) {
      this.setState({
        redirect: "/login",
      });
    } else {
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        })
        .then((response) => {
          if (!response.data.is_login) {
            let redirect = "/login";
            localStorage.removeItem("token");
            this.setState({
              redirect,
            });
          }
        });
    }
  };

  render() {
    if (this.state.redirect) {
      return (
        <Router>
          <Redirect to={this.state.redirect} />
          <Route path="/login" component={Login} />
        </Router>
      );
    } else {
      return (
        <Router>
          <Navbar />
          <div className="container mt-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/create" component={Form} />
              <Route path="/product/:id" component={Form} />
              <Route path="/about" component={About} />
              <Route component={NotPage} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
