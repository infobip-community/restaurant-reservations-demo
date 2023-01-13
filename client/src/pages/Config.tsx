import React, {useEffect, useState} from 'react';
import {FieldI} from "./ConfigTypes";
import {
    Container,
    Grid, Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import {APIConfigPath} from "../const";

const EmptyField = {
    name: '',
    placeHolder: '',
    disabled: "false",
    required: "false",
    additional: "true",
    saved:"true"
};

const  ConfigPage: React.FC = () => {
    const [fields, setFields] = useState<FieldI[]>([]);

    useEffect(()=> {
        (async () => {
          const response = await fetch(`${APIConfigPath}`, {});
             const result = await response.json();
            result.config && setFields(result.config.fields);
        })();
    },[]);

    const handleSaveConfigField = async (field:FieldI, index: number) => {
        const saveField = {...field,  disabled: "true"};
        const fieldsArray  = [...fields];
        fieldsArray.splice(index, 1, saveField);
        setFields(fieldsArray);
        (await fetch(`${APIConfigPath}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fieldsArray),
        }));
    }

    const handleAddField = ()=>{
        setFields([...fields, EmptyField])
    }

    const handleDeleteField = (fieldName:FieldI) => async () => {
        (await fetch(`${APIConfigPath}/additionalFields`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fieldName),
            }));
        const fieldsArray =  [...fields];
        setFields(fieldsArray.filter(e =>  e.name !== fieldName.name));
    }

    const modifyField = (field:FieldI, fieldName:string, value:string, index:number) => {
        const fieldsArray  = [...fields];
        fieldsArray.splice(index, 1, {...field, [fieldName]: value});
        setFields(fieldsArray);
    }

    const handleEditFields = (field:FieldI, index:number) => {
        const fieldsArray  = [...fields];
        fieldsArray.splice(index, 1, {...field, disabled: "false"});
        setFields(fieldsArray);
    }

    return(<Container fixed>
        <Grid container spacing={2} justifyContent="center">
            <br />
            <Grid item xs={12} md={10}>
                <Typography variant="h4" component="h4">
                    Configuration Page
                </Typography>
                <br />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Place Holder</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fields.map((field,index) => (
                                <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="right">
                                <TextField
                                    fullWidth
                                    disabled={field.disabled==="true"}
                                    onChange={e => modifyField(field, 'name',e.target.value, index)}
                                    value={field.name}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <TextField
                                fullWidth
                                disabled={field.disabled==="true"}
                                onChange={e => modifyField(field, 'placeHolder',e.target.value, index)}
                                value={field.placeHolder}
                            />
                            </TableCell>
                            <TableCell align="right">
                                <SaveIcon onClick={() => handleSaveConfigField(field, index)} color={(field.saved==="false" && field.disabled ==="true") || (field.saved==="true" && field.disabled ==="true")? "disabled":"primary"}/>
                                <EditIcon onClick={() => handleEditFields(field, index)} color={field.saved==="true"? "secondary":"disabled"}/>
                                    <DeleteIcon onClick={handleDeleteField(field)} color={field.saved==="false" && field.disabled ==="true"? "disabled":"error"} />
                                </TableCell>
                            </TableRow>
                            ))}
                            <TableRow  >
                                <TableCell colSpan={3} align={'center'}>
                                    <AddCircleOutlineIcon onClick={handleAddField} color="primary" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Container>);
}

export default ConfigPage;
