import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const globalState = {
  auth_token: "fjwgogpethpoepo"
};

const reducer = (state = globalState, action) => {
  if (action.type === 'SET_TOKEN') {
    return {
      auth_token: state.auth_token
    }
  }
  return state;
}

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("root"));