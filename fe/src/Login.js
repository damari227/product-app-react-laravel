import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import App from './App';
import { Link, BrowserRouter as Router, Redirect, Route } from "react-router-dom";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect: null
        }
    }

    // componentDidMount() {}

    login = () => {

        const email = document.querySelector('input[name=email]').value;
        const password = document.querySelector('input[name=password]').value;

        axios.post('http://localhost:8000/api/login', {
            email, password
        }).then((response) => {
            if (response.data.success) {

                let token;
                token = response.data.token;
                localStorage.setItem('token', token);

                this.setState({
                    redirect: '/'
                })
            }
        });
    }

    render() {

        if (this.state.redirect) {
            return (
                <Router>
                    <Redirect to={this.state.redirect} />
                    <Route path="/" exact component={App} />
                </Router>
            )
        }

        return (
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center text-primary">Login</h4>
                            <div className="mt-4">
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <div className="text-right">
                                    <Link className="btn btn-primary" onClick={this.login}>Login now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        auth_token: '' 
    }
}

const mapDispatch = (dispatch) => {

    return {
        set_token: () => dispatch({
            type: 'SET_TOKEN',
        })
    }
}

export default connect(mapState, mapDispatch)(Login);