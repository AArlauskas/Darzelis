import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SignInDisplay from './Containers/SignInDisplay';
import RegisterDisplay from './Containers/RegisterDisplay';
import HomeDisplay from './Containers/InfoDisplay';
import Navigation from './Components/Navigation/Navigation';
import CommentsDisplay from './Containers/CommentsDisplay/CommentsDisplay';

class Routing extends Component {
    state = {}
    render() {
        return (
            <div>
                {window.localStorage.getItem("isLoggedIn") === "true" ? <Navigation /> : null}
                <Switch>
                    <Route exact path="/">
                        <SignInDisplay />
                    </Route>
                    <Route path="/register">
                        <RegisterDisplay />
                    </Route>
                    {window.localStorage.getItem("isLoggedIn") === "true" ?
                        <React.Fragment>
                            <Route path="/info">
                                <HomeDisplay />
                            </Route>
                            <Route path="/comments">
                                <CommentsDisplay />
                            </Route>
                        </React.Fragment>
                        : <Redirect to="/" />}
                </Switch>
            </div>
        );
    }
}

export default Routing;