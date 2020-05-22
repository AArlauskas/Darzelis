import React, {useState} from 'react';
import {Grid, TextField, IconButton} from "@material-ui/core";
import groups from "../../Data/Groups";
import MenuItem from "@material-ui/core/MenuItem";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import dalykai from '../../Data/Dalykai';

const AddEntry = () => {
    const [group, setGroup] = useState("");
    const [child, setChild] = useState("");
    const [childSelected, setChildSelected] = useState(false);
    const [groupSelected, setGroupSelected] = useState(false);
    return (
        <Grid container style={{ alignItems: "center", display: "flex", justifyContent: "center" }} direction="column" spacing={2}>
            <Grid item>
                <TextField
                    style={{ width: "100px", }}
                    select
                    label="Group"
                    value={group}
                    onChange={(e) => {
                        setGroup(e.target.value);
                        setGroupSelected(true);
                        setChildSelected(false);
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
                    onChange={(e) => {
                        setChild(e.target.value);
                        setChildSelected(true);
                        setGroupSelected(false);
                        setGroup("");
                    }}
                    helperText="Select child"
                >
                    {groups.map(lGroup => lGroup.children.map(child => (
                        <MenuItem key={child.name} value={child.name}>
                            {child.name}
                        </MenuItem>
                    )))}
                </TextField>
            </Grid>
            {groupSelected === childSelected ? "" : (
                <Grid container item style={{marginTop: "50px", alignContent: "left", marginLeft: "15px"}} direction="column">
                    {groupSelected ? (groups.find(lGroup => lGroup.name === group).children.map(lChild => (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            window.localStorage.setItem(lChild.name, document.getElementById(`${lChild.name} grade`).value + "\n" +
                            document.getElementById(lChild.name).firstChild.nodeValue);
                        }}>
                            <Grid container item key={lChild} spacing={3}>
                                <Grid item>
                                    <h4>{lChild.name}</h4>
                                </Grid>
                                <Grid item style={{marginTop: "10px", width: "40px"}}>
                                    <TextField id={`${lChild.name} grade`} inputProps={{maxLength: 2}} onChange={(e) => {
                                        if (e.target.value > 10) {
                                            document.getElementById(`${lChild.name} grade`).value = 10;
                                        } else if (e.target.value < 1) {
                                            document.getElementById(`${lChild.name} grade`).value = 1;
                                        } else if (isNaN(+e.target.value)) {
                                            document.getElementById(`${lChild.name} grade`).value = 1;
                                        }
                                    }}
                                               required
                                    />
                                </Grid>
                                <Grid item style={{width: "150px", marginTop: "10px"}}>
                                   <TextField
                                       fullWidth
                                       select
                                       id={lChild.name}
                                       defaultValue={dalykai[0]}
                                   >
                                       {dalykai.map((dalykas) => (
                                           <MenuItem key={dalykas} value={dalykas}>
                                               {dalykas}
                                           </MenuItem>
                                       ))}
                                   </TextField>
                                </Grid>
                                <Grid item>
                                   <IconButton type="submit">
                                       <DoneOutlineIcon/>
                                   </IconButton>
                                </Grid>
                            </Grid>
                        </form>
                    ))) : (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            window.localStorage.setItem(child, document.getElementById(`${child} grade`).value + "\n" +
                                document.getElementById(child).firstChild.nodeValue + "Comment:" + document.getElementById(`${child} comment`).value);
                        }}>
                            <Grid container item spacing={3}>
                                <Grid item>
                                    <h4>{child}</h4>
                                </Grid>
                                <Grid item style={{marginTop: "10px", width: "40px"}}>
                                    <TextField id={`${child} grade`} inputProps={{maxLength: 2}} onChange={(e) => {
                                        if (e.target.value > 10) {
                                            document.getElementById(`${child} grade`).value = 10;
                                        } else if (e.target.value < 1) {
                                            document.getElementById(`${child} grade`).value = 1;
                                        } else if (isNaN(+e.target.value)) {
                                            document.getElementById(`${child} grade`).value = 1;
                                        }
                                    }}
                                               required
                                    />
                                </Grid>
                                <Grid item style={{width: "150px", marginTop: "10px"}}>
                                    <TextField
                                        fullWidth
                                        select
                                        id={child}
                                        defaultValue={dalykai[0]}
                                    >
                                        {dalykai.map((dalykas) => (
                                            <MenuItem key={dalykas} value={dalykas}>
                                                {dalykas}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item style={{width: "300px", }}>
                                    <TextField
                                        label="Komentaras"
                                        fullWidth
                                        multiLine
                                        id={`${child} comment`}
                                    />
                                </Grid>
                                <Grid item>
                                    <IconButton type="submit">
                                        <DoneOutlineIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Grid>
            )}
        </Grid>
    );
};

export default AddEntry;