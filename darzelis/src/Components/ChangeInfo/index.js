import React from 'react';
import { Button } from '@material-ui/core';


const ChangeInfo = () => {
    return (
        <React.Fragment>
            <a href="/info">Back</a>
            <div style={{ textAlign: "center" }}>
                <Button variant="contained" onClick={() => window.location.href="/changePassword"}>
                    Change password
                </Button>
                <Button variant="contained" onClick={() => window.location.href="/changeEmail"}>
                    Change email address
                </Button>
                <Button variant="contained" onClick={() => window.location.href="/changePhone"}>
                    Change phone number
                </Button>
            </div>
        </React.Fragment>
    );
};

export default ChangeInfo;