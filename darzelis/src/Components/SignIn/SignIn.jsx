import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import users from '../../Data/User';

class SignIn extends Component {
    state = {
        username: "",
        password: "",
        error: false
    }
    render() {
        const TryToSignIn = () => {
            users.forEach(user => {
                if (user.username === this.state.username && user.password === this.state.password) {
                    window.localStorage.setItem("role", user.role);
                    window.localStorage.setItem("username", user.username);
                    window.localStorage.setItem("isLoggedIn", true);
                    window.location.href = "/home"
                    return;
                }
            })
            this.setState({ error: true })
        }
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Sign in</h1>
                <form style={{ textAlign: "center", marginTop: 100 }}>
                    <div style={{ marginBottom: 15 }}>
                        <TextField
                            error={this.state.error}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Username"
                            required
                            onChange={event => this.setState({ username: event.target.value })} />

                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <TextField
                            error={this.state.error}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Password"
                            type="password"
                            required onChange={event => this.setState({ password: event.target.value })} />
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            disabled={this.state.username.length < 5 && this.state.password.length < 5}
                            onClick={() => TryToSignIn()}>
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;