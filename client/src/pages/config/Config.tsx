import React, {useEffect, useState} from 'react';
import {FieldI, FIELD_KEY} from "./ConfigTypes";
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
import { API_CONFIG_PATH } from "../../const";
import { ConfigContext } from '../../contexts/ConfigContext';

const EMPTY_FIELD = {
    id: null,
    name: '',
    placeHolder: '',
    required: false,
    additional: true,
    saved: true,
    editMode: true
};

const ConfigPage: React.FC = () => {
    const { fields, setFields } = React.useContext(ConfigContext);
    const [ mappedFields, setMappedFields ] = useState<FieldI[]>([]);
    const [ editingField, setEditingField] = useState<FieldI>();

    const handleSaveConfigField = async (field: FieldI) => {
        const saveField = { ...field, saved: true, editMode: true };
        const data  = [...mappedFields];
        data.splice(field.id - 1, 1, saveField);

        (await fetch(`${API_CONFIG_PATH}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }));

        setMappedFields(data);
        updateFieldsContext(data);
        setEditingField(undefined);
    }

    const handleDeleteField = (field: FieldI) => async () => {
        (await fetch(`${API_CONFIG_PATH}/additionalFields`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(field),
        }));

        const data =  [...mappedFields].filter(e => e.id !== field.id);
        setMappedFields(data);
        updateFieldsContext(data);
    }

    const handleEditFields = (field: FieldI) => {
        const data = [...mappedFields];

        if (editingField && editingField.id !== field.id) {
            data.splice(editingField.id - 1, 1, { ...editingField, saved: true, editMode: true });
        }
        if (!editingField || editingField.id !== field.id) {
            setEditingField(field);
        }
        
        const editField = { ...field, editMode: true };
        data.splice(field.id - 1, 1, { ...editField });
        setMappedFields(data);
    }

    const modifyField = (field: FieldI, fieldName: FIELD_KEY, value: string) => {
        const editField = { ...field, saved: !isFieldValid(field, fieldName, value) };
        const data  = [...mappedFields];
        data.splice(field.id - 1, 1, { ...editField, [fieldName]: value });
        setMappedFields(data);
    }

    const updateFieldsContext = (data: FieldI[]) => {
        const fields: FieldI[] = data.map(item => {
            const newField = Object.assign({}, item);
            delete newField.saved;
            delete newField.editMode;
            return newField;
        });
        setFields!({ fields });
    }

    const handleAddField = () => {
        setMappedFields([...mappedFields, { ...EMPTY_FIELD, id: mappedFields.length + 1 }])
    }

    const isFieldValid = (field: FieldI, fieldName: FIELD_KEY, value: string) => {
        const existing = fields.map(item => item[fieldName]);
        const newField = { ...field, [fieldName]: value };

        if (value === '') {
            return false;
        }
        if (newField.placeHolder === '' || newField.name === '') { // if any field is empty
            return false;
        }
        if (existing?.includes(value)) { // already exists
            return false;
        }
        if (editingField && value === editingField[fieldName]) { // same value as original
            return false;
        }
        
        return true;
    }

    useEffect(() => {
        const mappedFields = fields.map(field => {
            return {...field, saved: true, editMode: true};
        });
        setMappedFields(mappedFields);
    }, [fields]);

    return(<Container fixed>
        <Grid container spacing={2} justifyContent="center">
            <br />
            <Grid item xs={12} md={10}>
                <Typography variant="h4" component="h4">Configuration Page</Typography>
                <br />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Place Holder</TableCell>
                                <TableCell align="right" width={80}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mappedFields?.map((field: FieldI) => (
                                <TableRow key={field.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="left">
                                        <TextField
                                            fullWidth
                                            disabled={field.required || !field.editMode}
                                            onChange={e => modifyField(field, FIELD_KEY.name, e.target.value)}
                                            onClick={() => handleEditFields(field)}
                                            value={field.name}
                                        />
                                    </TableCell>
                                    <TableCell align="left">
                                        <TextField
                                            fullWidth
                                            disabled={!field.editMode}
                                            onChange={e => modifyField(field, FIELD_KEY.placeHolder, e.target.value)}
                                            onClick={() => handleEditFields(field)}
                                            value={field.placeHolder}
                                        />
                                    </TableCell>
                                    <TableCell align="left" width={80}>
                                        <SaveIcon onClick={() => handleSaveConfigField(field)} color={field.saved ? "disabled" : "primary"}/>
                                        <EditIcon onClick={() => handleEditFields(field)} color={editingField && editingField.id === field.id ? "secondary" : "disabled"}/>
                                        {!field.required && <DeleteIcon onClick={handleDeleteField(field)} color={"secondary"} />}
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
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
