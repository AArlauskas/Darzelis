import React, { Component } from 'react';
import { Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddCommentIcon from '@material-ui/icons/AddComment';
import MessageSender from '../MessageSender/MessageSender';

class Navigation extends Component {
    state = {
        modalOpen: false
    }
    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Breadcrumbs>
                        <Link to="/info">Info</Link>
                        <Link to="/achievements">Achievements</Link>
                        <Link to="/comments">Comments</Link>
                        <Link to="/changeInfo">Change information</Link>
                    </Breadcrumbs>
                </div>
                <div style={{ textAlign: "right", paddingLeft: 10 }}>
                    <a href="/" onClick={() => window.localStorage.clear()}>Logout</a>
                    <div style={{ textAlign: "left" }}>
                        <AddCommentIcon onClick={() => this.setState({ modalOpen: true })} />
                    </div>
                </div>
                <MessageSender open={this.state.modalOpen} onClose={() => this.setState({ modalOpen: "false" })} />
            </div>
        );
    }
}

export default Navigation;