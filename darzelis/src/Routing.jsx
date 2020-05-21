import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SignInDisplay from './Containers/SignInDisplay';
import RegisterDisplay from './Containers/RegisterDisplay';
import HomeDisplay from './Containers/InfoDisplay';
import Navigation from './Components/Navigation/Navigation';
import CommentsDisplay from './Containers/CommentsDisplay/CommentsDisplay';
import ChangeInfoDisplay from "./Containers/ChangeInfoDisplay";
import ChangePassword from "./Components/ChangeInfo/ChangePassword";
import ChangeEmail from "./Components/ChangeInfo/ChangeEmail";
import ChangePhone from "./Components/ChangeInfo/ChangePhone";
import Achievements from "./Components/Achievements";

class Routing extends Component {
    state = {}
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <SignInDisplay />
                    </Route>
                    <Route path="/register">
                        <RegisterDisplay />
                    </Route>
                    {window.localStorage.getItem("isLoggedIn") === "true" ?
                        <React.Fragment>
                            <Navigation />
                            <Route path="/info">
                                <HomeDisplay />
                            </Route>
                            <Route path="/comments">
                                <CommentsDisplay />
                            </Route>
                            <Route path="/changeInfo" >
                                <ChangeInfoDisplay />
                            </Route>
                            <Route path="/changePassword" >
                                <ChangePassword />
                            </Route>
                            <Route path="/changeEmail" >
                                <ChangeEmail />
                            </Route>
                            <Route path="/changePhone" >
                                <ChangePhone />
                            </Route>
                            <Route path="/achievements" >
                                <Achievements />
                            </Route>
                        </React.Fragment>
                        : <Redirect to="/" />}
                </Switch>
            </div>
        );
    }
}

export default Routing;