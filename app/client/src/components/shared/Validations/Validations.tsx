import {ErrorI} from "../../../app/App.types";

export const validateField =  (value: string) => {
    const regex = /^\s*$/ ;
    return regex.test(value);
}

export const isMeetingValid = (errorsObject: ErrorI) => {
        return Object.values(errorsObject).find(error => error === true);
}

