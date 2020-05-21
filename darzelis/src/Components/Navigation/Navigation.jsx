import React, { Component } from 'react';
import { Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    state = {}
    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Breadcrumbs>
                        <Link to="/home">Info</Link>
                        <Link to="/achievements">Achievements</Link>
                        <Link to="/comments">Comments</Link>
                        <Link to="/changeInfo">Change information</Link>
                    </Breadcrumbs>
                </div>
                <div style={{ textAlign: "right", paddingLeft: 10 }}>
                    <a href="/" onClick={() => window.localStorage.clear()}>Logout</a>
                </div>
            </div>
        );
    }
}

export default Navigation;