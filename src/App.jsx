import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MainLayout, HomepageLayout } from "./layouts";
import { Homepage, Registration, Login } from "./pages";

import "./default.scss";
import { auth, handleUserProfile } from "./firebase/utils";

const initialState = { currentUser: null };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      }

      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
          </Route>
          <Route path="/registration">
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          </Route>
          <Route path="/login">
            {currentUser ? (
              <Redirect to="/" />
            ) : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
