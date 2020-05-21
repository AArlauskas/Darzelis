import React, {useState} from 'react';
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ChangePhone = () => {
    const [phone, setPhone] = useState('');

    return (
        <React.Fragment>
            <a href="/changeInfo">Back</a>
            <form style={{textAlign: "center" }} onSubmit={(e) => {
                e.preventDefault();
                alert("Phone number changed successfully");
                window.location.href="/changeInfo";
            }}>
                <Grid container direction="column">
                    <Grid item style={{marginBottom: 15}}>
                        <TextField
                            style={{ width: 400 }}
                            variant="outlined"
                            label="Phone number"
                            required
                            onChange={event => setPhone(event.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" disabled={phone === ""}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default ChangePhone;