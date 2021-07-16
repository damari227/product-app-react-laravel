import {
  Link,
  NavLink,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Component } from "react";
import Login from "./Login";

class Navbar extends Component {
  state = {
    redirect: null,
  };

  logout = () => {
    localStorage.removeItem("token");

    window.location.href = '/login';

    // this.setState({
    //   redirect: "/login",
    // });
  };

  render() {
    // if (this.state.redirect) {
    //   return (
    //     <Router>
    //       <Redirect to={this.state.redirect} />
    //       <Route path="/login" component={Login} />
    //     </Router>
    //   );
    // }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-danger"
                  onClick={this.logout}
                  to="/login"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
