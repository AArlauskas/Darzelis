import React, {useState} from 'react';
import { Typography, Table, TableHead, TableRow, Grid, TableBody, Modal, TextField, Button } from '@material-ui/core';
import MuiTableCell from '@material-ui/core/TableCell';
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import groups from "../../Data/Groups";
import MenuItem from "@material-ui/core/MenuItem";

const TableCell = withStyles({
   root: {
       border: "1px solid black",
       padding: "5px",
   }
})(MuiTableCell);


const Achievements = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [group, setGroup] = useState("");
    const [child, setChild] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    return window.localStorage.getItem("role") === "admin" && !buttonClicked ? (
            <Grid container style={{ alignItems: "center", display: "flex", justifyContent: "center" }} direction="column" spacing={2}>
                <Grid item>
                    <TextField
                        style={{ width: "100px", }}
                        select
                        label="Group"
                        value={group}
                        onChange={(e) => {
                            setGroup(e.target.value);
                            setChild("");
                        }}
                        helperText="Select group"
                    >
                        {groups.map(group => (
                            <MenuItem key={group.name} value={group.name}>
                                {group.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        style={{ width: "100px" }}
                        select
                        label="Child"
                        value={child}
                        onChange={(e) => setChild(e.target.value)}
                        helperText="Select child"
                    >
                        {group === "" ? "" : groups.find((lGroup) => lGroup.name === group).children.map(child => (
                            <MenuItem key={child.name} value={child.name}>
                                {child.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <Button type="submit" onClick={() => setButtonClicked(true)} disabled={child === ""} variant="contained">
                        Go to achievements
                    </Button>
                </Grid>
            </Grid>
            ) : (
        <Grid container style={{ maxWidth: '100%'}} direction="column">
            <Grid item style={{textAlign: "center"}}>
                <Typography variant="h3">Achievements</Typography>
            </Grid>
            <Grid item>
                <Table>
                   <TableHead>
                       <TableRow style={{background: "green"}}>
                           <TableCell>
                               Dalykas
                           </TableCell>
                           {Array.from(Array(31).keys()).map(x => ++x).map((day) => {
                               return (
                                   <React.Fragment>
                                   <TableCell style={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => {
                                       e.preventDefault();
                                        setOpen(true);
                                   }}>
                                       {day}
                                   </TableCell>
                                   <Modal open={open} onClose={() => setOpen(false)} style={{ position: "absolute", top: "30%", left: "30%"}}>
                                       <div className={classes.paper}>
                                           <p>{`Data: 2020-05-${day.toString().length === 1 ? `0${day}` : day}\nIrasas 13:45: Jonas nevalgo pusryciu`}</p>
                                       </div>
                                   </Modal>
                                   </React.Fragment>
                               );
                           })}
                       </TableRow>
                   </TableHead>
                    <TableBody>
                        {dalykai.map((dalykas) => (
                            <TableRow>
                                <TableCell>
                                    {dalykas}
                                </TableCell>
                                {Array.from(Array(31).keys()).map(x => ++x).map((day) => {
                                    let pazymys = Math.floor(Math.random() * 11);
                                    if (pazymys === 0) pazymys = '';
                                    return (
                                        <TableCell style={{ cursor: "pointer", textAlign: "center" }} onClick={(e) => {
                                            e.preventDefault();
                                        alert(`Dalyko pavadinimas: ${dalykas}\nData: 2020-05-${day.toString().length === 1 ? `0${day}` : day}\nAutklėtoja(s): Petras\nĮvertinimas: ${pazymys}`);
                                        }}>
                                            {pazymys}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const dalykai = ["Miegojimas", "Valgymas", "Matematika"];

export default Achievements;