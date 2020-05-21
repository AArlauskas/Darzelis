import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import comments from "../../Data/Comments";
import users from '../../Data/Users';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class CommentsDisplay extends Component {
    state = {
        kidsComments: window.localStorage.getItem("role") === "admin" ? comments : comments.filter(comment => users.find(user => user.username === window.localStorage.getItem("username")).childName === comment.to)
    }
    render() {
        return (
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Data</TableCell>
                                <TableCell>Gavėjas</TableCell>
                                <TableCell>Siuntėjas</TableCell>
                                <TableCell>Turinys</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.kidsComments.map(comment =>
                                <TableRow key={comment.content}>
                                    <TableCell>{comment.date}</TableCell>
                                    <TableCell>{comment.to}</TableCell>
                                    <TableCell>{comment.from}</TableCell>
                                    <TableCell>{comment.content}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                {window.localStorage.getItem("role") === "admin" || window.localStorage.getItem("role") === "observer" ? <div>
                    <AddCircleIcon style={{ marginTop: 10, marginLeft: 15 }} />  </div> : null}
            </div>
        );
    }
}

export default CommentsDisplay;