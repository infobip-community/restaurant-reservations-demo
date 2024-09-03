import * as React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { ErrorI, ReservationI } from "../../pages/home/Home.types";
import { API_CONFIG_PATH, API_RESERVATIONS_PATH, INFOBIP_API_BASE_URL } from "../../const";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { Diversity3 } from "@mui/icons-material";
import { validateReservation } from "../../utils/validations/validateReservation";
import { AlertContext } from "../../contexts/AlertContext";
import { FieldI } from "../../pages/config/ConfigTypes";
import { Field, FIELD_NAME } from "./CreateReservationTypes";
import { CustomerContext } from "../../contexts/CustomerContext";
import { ConfigContext } from "../../contexts/ConfigContext";
import { useAuthContext } from "../AuthProvider";

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
  host_phone_number: "",
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
  const authContext = useAuthContext();
  const [errors, setErrors] = useState<ErrorI>({});
  const [date, setDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(TODAY);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [additionalFields, setAdditionalFields] = useState<FieldI[]>([]);
  const { updateAlertContext, isLoading } = React.useContext(AlertContext);
  const { name, email, phoneNumber } = React.useContext(CustomerContext);
  const { fields } = React.useContext(ConfigContext);
  const [newReservation, setNewReservation] = useState<ReservationI>({
    ...emptyNewReservation,
    host_name: name,
    host_email: email,
    host_phone_number: phoneNumber,
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_CONFIG_PATH}/additionalFields`, {});
      const result = await response.json();
      let additionalFieldsArr: Field[] = [];
      const addtionalF: FieldI[] = result.config.length ? result.config : [];
      setAdditionalFields(result.config);
      addtionalF.forEach((field) => {
        const newField = { name: field.name, value: "" };
        additionalFieldsArr.push(newField);
      });
      setNewReservation({
        ...emptyNewReservation,
        host_name: name,
        host_email: email,
        host_phone_number: phoneNumber,
        additionalFields: [...additionalFieldsArr],
      });
    })();
  }, [name, email, phoneNumber]);

  const handleChange = (newValue: Date | null, field: FIELD_NAME) => {
    let today = new Date(newValue ? newValue : "");
    let value, minute, hour, day, month, year;
    minute = today.getMinutes();
    hour = today.getHours();
    day = today.getUTCDate();
    month = today.getUTCMonth() + 1;
    year = today.getUTCFullYear();
    switch (field) {
      case FIELD_NAME.date:
        if (newValue) {
          value = `${month}/${day}/${year}`;
          setDate(newValue);
        }
        break;
      case FIELD_NAME.hour:
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
    const errors = validateReservation(
      JSON.parse(JSON.stringify(newReservation))
    );
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

  const handleChangeAdditionalFields = (
    fieldName: string,
    value: string,
    index: number
  ) => {
    const additionalField: Field = { name: fieldName, value: value };
    let additionalFieldsArr: Field[];
    if (newReservation.additionalFields) {
      additionalFieldsArr = [...newReservation.additionalFields];
    } else {
      additionalFieldsArr = [];
    }
    additionalFieldsArr[index] = additionalField;
    setNewReservation({
      ...newReservation,
      additionalFields: [...additionalFieldsArr],
    });
  };

  const isReservationValid = (errors: ErrorI) => {
    return !Object.values(errors).length;
  };

  const addReservation = async () => {
    const errors = validateReservation(newReservation);
    setIsSubmitted(true);
    setErrors({ ...errors });

    if (isReservationValid(errors)) {
      updateAlertContext({ isLoading: true });
      const response = (await fetch(`${API_RESERVATIONS_PATH}`, {
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

  const savePerson = async () => {
    const errors = validateReservation(newReservation);
    setErrors({ ...errors });

    if (!isReservationValid(errors)) {
      updateAlertContext({
        type: "error",
        message: "Please fill required fields",
        isVisible: true,
        isLoading: false,
      });
      return;
    }

    updateAlertContext({ isLoading: true });
    const response = await fetch(
      `${INFOBIP_API_BASE_URL}/people/2/persons?email=${newReservation.host_email}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `${authContext.authorization}`,
        },
      }
    );
    const status = response.status;
    if (response && status === 200) {
      updateAlertContext({
        type: "warning",
        message: "Person already exists!",
        isVisible: true,
        isLoading: false,
      });
    } else {
      createPerson()
        .then(() => {
          updateAlertContext({
            type: "success",
            message: "Person successfully saved!",
            isVisible: true,
            isLoading: false,
          });
        })
        .catch((error) => {
          updateAlertContext({
            type: "error",
            message: error,
            isVisible: true,
            isLoading: false,
          });
        });
    }
  };

  const createPerson = async () => {
    const newPerson = {
      firstName: `${newReservation.host_name}`,
      contactInformation: {
        email: [
          {
            address: `${newReservation.host_email}`,
          },
        ],
      },
    };

    const result = await fetch(`${INFOBIP_API_BASE_URL}/people/2/persons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authContext.authorization}`,
      },
      body: JSON.stringify(newPerson),
    });
    const createPersonResponse = await result.json().catch((error) => {
      return error;
    });
    return createPersonResponse;
  };

  const getAdditionalFieldValue = (fieldName: string) => {
    let value = "";
    if (newReservation.additionalFields) {
      const additionalField = newReservation.additionalFields.find(
        (f) => f.name === fieldName
      );
      if (additionalField) {
        value = additionalField.value;
      }
    }
    return value;
  };
  
  const getPlaceholder = (fieldName: FIELD_NAME) => {
    return fields.find((item: FieldI) => item.name.toLowerCase() === fieldName)?.placeHolder;
  };

  return (
    <>
      <br />
      <Grid container spacing={2} rowSpacing="1rem">
        <Grid item xs={6} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FieldContainer>
              <DesktopDatePicker
                data-test-id="date"
                label={getPlaceholder(FIELD_NAME.date)}
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={(value) => handleChange(value, FIELD_NAME.date)}
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
                    label={getPlaceholder(FIELD_NAME.hour)}
                    value={startTime}
                    onChange={(value) => handleChange(value, FIELD_NAME.hour)}
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
            label={getPlaceholder(FIELD_NAME.hostName)}
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
            label={getPlaceholder(FIELD_NAME.hostEmail)}
            value={newReservation.host_email}
            onChange={handleChangeInput}
            helperText={isSubmitted ? errors.host_email : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={!!errors.host_phone_number && isSubmitted}
            name="host_phone_number"
            label={getPlaceholder(FIELD_NAME.phoneNumber)}
            value={newReservation.host_phone_number}
            onChange={handleChangeInput}
            helperText={isSubmitted ? errors.host_phone_number : ""}
          />
        </Grid>
        {additionalFields && additionalFields.map((additionalField, index) => (
          <Grid key={index} item xs={12}>
            <TextField
              fullWidth
              key={additionalField.name}
              error={false}
              name={additionalField.name}
              label={additionalField.placeHolder}
              value={getAdditionalFieldValue(additionalField.name)}
              onChange={(e) =>
                handleChangeAdditionalFields(
                  additionalField.name,
                  e.target.value,
                  index
                )
              }
            />
          </Grid>
        ))}
        <Grid item xs={12} md={12} lg={12}>
          <ButtonContainer>
            <Button
              size={"large"}
              onClick={savePerson}
              variant="contained"
              disabled={isLoading || (isSubmitted && !isReservationValid(errors))}>
              Save person data
            </Button>
          </ButtonContainer>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <ButtonContainer>
            <Button
              size={"large"}
              onClick={addReservation}
              variant="contained"
              disabled={isLoading || (isSubmitted && !isReservationValid(errors))}>
              Create
            </Button>
          </ButtonContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateReservation;
