import { AlertI, MeetingI } from "../../app/App.types";

export interface MeetingsPropsI {
  data: MeetingI[];
  onUpdate: () => void;
  setAlertMessage: (alert: AlertI) => void;
  isLoading: boolean;
}

export interface RowPropsI {
  data: MeetingI;
  onSave: (meeting: MeetingI) => void;
  onDelete: (meeting: MeetingI) => void;
  isLoading: boolean;
}
