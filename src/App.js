import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import TodoPage from "./components/todo.page";
import SignIn from "./components/signIn.page";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={() => {
            if (this.state.currentUser !== null) {
              return <Redirect to="/todo" />;
            }
            return <SignIn />;
          }}
        />
        <Route exact path="/todo" exact component={TodoPage} />
      </BrowserRouter>
    );
  }
}

export default App;
