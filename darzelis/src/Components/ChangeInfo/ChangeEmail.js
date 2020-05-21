import React, {useState} from 'react';
import { TextField, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ChangeEmail = () => {
    const [email, setEmail] = useState('');

    return (
        <React.Fragment>
            <a href="/changeInfo">Back</a>
            <form style={{ textAlign: "center" }} onSubmit={(e) => {
               e.preventDefault();
               alert("Email changed successfully");
               window.location.href="/changeInfo";
            }}>
                <Grid container direction="column">
                    <Grid item>
                        <TextField
                            style={{ width: 400, marginBottom: 15 }}
                            variant="outlined"
                            label="New email address"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" disabled={email === ""}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default ChangeEmail;