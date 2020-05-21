import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SignInDisplay from './Containers/SignInDisplay';
import RegisterDisplay from './Containers/RegisterDisplay';
import HomeDisplay from './Containers/HomeDisplay';

class Routing extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <SignInDisplay />
                </Route>
                <Route path="/register">
                    <RegisterDisplay />
                </Route>
                {window.localStorage.getItem("isLoggedIn") === "true" ?
                    <div>
                        <Route path="/home">
                            <HomeDisplay />
                        </Route>
                    </div> : <Redirect to="/" />}
            </Switch>
        );
    }
}

export default Routing;