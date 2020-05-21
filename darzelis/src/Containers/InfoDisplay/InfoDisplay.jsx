import React, { Component } from 'react';
import user from "../../user.jpeg";
import users from '../../Data/Users';

class HomeDisplay extends Component {
    state = {
        user: users.find(tempUser => tempUser.username === window.localStorage.getItem("username"))
    }
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div >
                    <img src={user} alt="userPhoto" style={{ width: 300, height: 300 }} />
                </div>
                <div>
                    <form>
                        <p>Name: {this.state.user.name}</p>
                        <p>Surname: {this.state.user.surname}</p>
                        {this.state.user.childName !== null ?
                            <div>
                                <hr style={{ width: 300 }} />
                                <p>Child's name: {this.state.user.childName}</p>
                                <p>Kindergarden: {this.state.user.kindergarden}</p>
                            </div> : null}
                    </form>
                </div>
            </div>);
    }
}

export default HomeDisplay;