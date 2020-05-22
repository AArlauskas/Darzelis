import React from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import users from '../../Data/Users';


export default function MaterialTableDemo() {
    const tableIcons = {
        Add: (props, ref) => <AddBox {...props} ref={ref} />,
        Check: (props, ref) => <Check {...props} ref={ref} />,
        Clear: (props, ref) => <Clear {...props} ref={ref} />,
        Delete: (props, ref) => <DeleteOutline {...props} ref={ref} />,

        Edit: (props, ref) => <Edit {...props} ref={ref} />,
    }
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Role', field: 'role', },
            { title: "key", field: "key" }
        ],
        data: users
    });

    return (
        <MaterialTable
            options={{
                paging: false,
                search: false
            }}
            icons={tableIcons}
            title="Permisions"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}