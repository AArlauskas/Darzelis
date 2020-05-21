import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import ValidKeys from '../../Data/ValidKeys';

class Register extends Component {
    state = {
        username: "",
        name: "",
        surname: "",
        number: "",
        email: "",
        password: "",
        repeatedPassword: "",
        key: ""
    }
    render() {
        const TryToRegister = () => {
            ValidKeys.forEach(key => {
                if (key.key === this.state.key) {
                    let registered = {
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email,
                        phone: this.state.number,
                        role: key.role
                    };
                    window.localStorage.setItem("registered", JSON.stringify(registered));
                    window.location.href = "/";
                }
            })
        }
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <form style={{ textAlign: "center", marginTop: 100 }}>
                    <div style={{ marginBottom: 15 }}>
                        <TextField
                            error={this.state.username.length < 5 && this.state.username !== ""}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Username"
                            required
                            onChange={event => this.setState({ username: event.target.value })} />

                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <TextField
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Name"
                            required
                            onChange={event => this.setState({ name: event.target.value })} />

                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <TextField
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Surname"
                            required
                            onChange={event => this.setState({ surname: event.target.value })} />

                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <TextField
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Phone number"
                            required
                            onChange={event => this.setState({ number: event.target.value })} />

                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <TextField
                            error={this.state.error}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="email"
                            required
                            onChange={event => this.setState({ email: event.target.value })} />

                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <TextField
                            error={this.state.password.length < 5 && this.state.password !== ""}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Password"
                            type="password"
                            required
                            onChange={event => this.setState({ password: event.target.value })} />
                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <TextField
                            error={this.state.repeatedPassword !== this.state.password && this.state.password !== ""}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Repeat password"
                            type="password"
                            required
                            onChange={event => this.setState({ repeatedPassword: event.target.value })} />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <TextField
                            error={this.state.error}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Provided key"
                            required
                            onChange={event => this.setState({ key: event.target.value })} />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <Button
                            variant="outlined"
                            // disabled={this.state.username.length < 5 && this.state.password.length < 5 && this.state.email.length < 5
                            //     && this.state.key.length < 8 && this.state.repeatedPassword !== this.state.password
                            //     && this.state.number.length < 7}
                            onClick={() => TryToRegister()}>
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
