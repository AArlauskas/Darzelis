import React, { useState } from 'react';
import { TextField, Grid, Button } from "@material-ui/core";

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <React.Fragment>
            <a href="/changeInfo">Back</a>
            <form style={{ textAlign: "center" }} onSubmit={(e) => {
                e.preventDefault();
                alert("Password changed successfully");
                window.localStorage.setItem("password", newPassword);
                window.location.href="/changeInfo";
            }}>
                <Grid container direction="column">
                    <Grid item style={{ marginBottom: 15 }} >
                        <TextField
                            error={password.length < 5 && password !== ""}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Current password"
                            type="password"
                            required
                            onChange={event => setPassword(event.target.value)} />
                    </Grid>
                    <Grid item style={{ marginBottom: 15 }} >
                        <TextField
                            error={newPassword.length < 5 && newPassword !== ""}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="New password"
                            type="password"
                            required
                            onChange={event => setNewPassword(event.target.value)} />
                    </Grid>
                    <Grid item style={{ marginBottom: 15 }}>
                        <TextField
                            error={confirmPassword.length < 5 && confirmPassword !== ""}
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Repeat new password"
                            type="password"
                            required
                            onChange={event => setConfirmPassword(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" disabled={password !== window.localStorage.getItem("password") || newPassword !== confirmPassword || newPassword.length < 5}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default ChangePassword;