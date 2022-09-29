import { Dispatch, SetStateAction } from "react";
import { MeetingI } from "../../../app/App.types";

export interface EditMeetingRowPropsI {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: MeetingI;
  onSave: (meeting: MeetingI) => void;
  onCancel: () => void;
  isLoading: boolean;
}
