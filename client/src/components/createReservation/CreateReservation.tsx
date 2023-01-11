import * as React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import { ErrorI, ReservationI } from "../../app/App.types";
import {APIConfigPath, APIPath} from "../../const";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { Diversity3 } from "@mui/icons-material";
import { validateReservation } from "../../utlis/validations/validateReservation";
import { AlertContext } from "../../contexts/AlertContext";
import {FieldI} from "../../pages/ConfigTypes";
import {Field} from "./CreateReservationTypes";

const TODAY = new Date();
let MINUTE = TODAY.getMinutes();
let HOUR = TODAY.getHours();
const setTime = () => {
  if (MINUTE > 30) {
    MINUTE = 30;
  } else {
    MINUTE = 0;
    HOUR += 1;
  }
  TODAY.setHours(HOUR);
  TODAY.setMinutes(MINUTE);
};
setTime();
const emptyNewReservation = {
  host_email: "",
  host_name: "",
  hour: `${HOUR}:${MINUTE < 10 ? `0${MINUTE}` : MINUTE}`,
  date: `${
    TODAY.getUTCMonth() + 1
  }/${TODAY.getUTCDate()}/${TODAY.getUTCFullYear()}`,
  party_size: "2",
  additionalFields: [],
};

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  & > button {
    width: 100%;
  }
`;

const FieldContainer = styled.div`
  & > div {
    width: 100%;
  }
`;

const CreateReservation = () => {
  const [newReservation, setNewReservation] =
    useState<ReservationI>(emptyNewReservation);
  const [errors, setErrors] = useState<ErrorI>({});
  const [date, setDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(TODAY);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [additionalFields, setAdditionalFields] = useState<FieldI[]>([]);
  const { updateAlertContext, isLoading } = React.useContext(AlertContext);

  useEffect(()=> {
    (async () => {
      const response = await fetch(`${APIConfigPath}/additionalFields`, {});
      const result = await response.json();
      let additionalFieldsArr:Field[] = [];
      const addtionalF:FieldI[] = result.config
      setAdditionalFields(result.config);
      addtionalF.map(field => {
        const newField = {name: field.name, value: ''}
        additionalFieldsArr.push(newField);
      })
      setNewReservation({...newReservation, additionalFields: [...additionalFieldsArr] });
    })();
  },[]);

  const handleChange = (newValue: Date | null, field: string) => {
    let today = new Date(newValue ? newValue : "");
    let value, minute, hour, day, month, year;
    minute = today.getMinutes();
    hour = today.getHours();
    day = today.getUTCDate();
    month = today.getUTCMonth() + 1;
    year = today.getUTCFullYear();
    switch (field) {
      case "date":
        if (newValue) {
          value = `${month}/${day}/${year}`;
          setDate(newValue);
        }
        break;
      case "hour":
        value = `${hour}:${minute < 10 ? `0${minute}` : minute}`;
        setStartTime(newValue);
        break;
    }
    setNewReservation({ ...newReservation, [field]: value });
  };

  const handleChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    setNewReservation({ ...newReservation, [e.target.name]: e.target.value });
    const errors = validateReservation(newReservation);
    if (isReservationValid(errors)) {
      updateAlertContext({
        isVisible: false,
        message: "",
        isLoading: false,
        type: "success",
      });
    }
    setErrors(errors);
  };

  const handleChangeAdditionalFields = (fieldName:string,value:string, index:number)=>{
    const additionalField:Field = {name: fieldName, value: value};
    let additionalFieldsArr:Field[];
    if (newReservation.additionalFields){
      additionalFieldsArr = [...newReservation.additionalFields]
    }else{
      additionalFieldsArr = []
    }
    additionalFieldsArr[index] = additionalField;
    setNewReservation({...newReservation, additionalFields: [...additionalFieldsArr]});
  }

  const isReservationValid = (errors: ErrorI) => {
    return !Object.values(errors).length;
  };

  const addReservation = async () => {
    const errors = validateReservation(newReservation);
    setIsSubmitted(true);
    setErrors({ ...errors });

    if (isReservationValid(errors)) {
      updateAlertContext({ isLoading: true });
      const response = (await fetch(`${APIPath}`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReservation),
      })) as any;
      const result = await response.json();
      if (result["id"]) {
        updateAlertContext({
          type: "success",
          message: "Your reservation successfully created!",
          isVisible: true,
          isLoading: false,
        });
        setNewReservation({ ...emptyNewReservation });
      } else {
        updateAlertContext({
          message: result["error"],
          type: "error",
          isVisible: true,
          isLoading: false,
        });
      }
    } else {
      updateAlertContext({
        type: "error",
        message: "Please fill required fields",
        isVisible: true,
        isLoading: false,
      });
    }
  };

  const getAdditionalFieldValue = (fieldName:string) => {
    let value = ''
    if (newReservation.additionalFields) {
      const additionalField = newReservation.additionalFields.find((f) => f.name === fieldName);
      if (additionalField){
        value = additionalField.value;
      }
    }
    return value;
  }

  return (
    <>
      <br />
      <Grid container spacing={2} rowSpacing="1rem">
        <Grid item xs={6} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FieldContainer>
              <DesktopDatePicker
                data-test-id="date"
                label="Date"
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={(value) => handleChange(value, "date")}
                renderInput={(params) => <TextField {...params} />}
              />
            </FieldContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item xs={6} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2} rowSpacing="1rem">
              <Grid item xs={12}>
                <FieldContainer>
                  <TimePicker
                    data-test-id="hour"
                    ampm={false}
                    label="Hour"
                    value={startTime}
                    onChange={(value) => handleChange(value, "hour")}
                    renderInput={(params) => <TextField {...params} />}
                    minutesStep={30}
                  />
                </FieldContainer>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              <Diversity3 />
            </InputLabel>
            <Select
              name="party_size"
              value={newReservation.party_size}
              label="size"
              onChange={handleChangeInput}
            >
              {Array.from(Array(22), (e, i) => {
                return (
                  i > 0 && (
                    <MenuItem key={i} value={i}>{`${i < 21 ? i : " "} ${
                      i === 1 ? "person" : i < 21 ? "people" : "Larger party"
                    }`}</MenuItem>
                  )
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={!!errors.host_name && isSubmitted}
            name="host_name"
            label="Host Name"
            value={newReservation.host_name}
            onChange={handleChangeInput}
            helperText={isSubmitted ? errors.host_name : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={!!errors.host_email && isSubmitted}
            name="host_email"
            label="Host Email"
            value={newReservation.host_email}
            onChange={handleChangeInput}
            helperText={isSubmitted ? errors.host_email : ""}
          />
        </Grid>
        {additionalFields && additionalFields.map((additionalField, index) =>
            <Grid item xs={12}>
            <TextField
                fullWidth
                key={additionalField.name}
                error={false}
                name={additionalField.name}
                label={additionalField.placeHolder}
                value={getAdditionalFieldValue(additionalField.name)}
                onChange={e => handleChangeAdditionalFields(additionalField.name,e.target.value,index)}
            />
          </Grid>
        )}
        <Grid item xs={12} md={12} lg={12}>
          <ButtonContainer>
            <Button
              size={"large"}
              onClick={addReservation}
              variant="contained"
              disabled={
                isLoading || (isSubmitted && !isReservationValid(errors))
              }
            >
              Create
            </Button>
          </ButtonContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateReservation;
