import { Dispatch, SetStateAction } from "react";
import { MeetingI } from "../../../app/App.types";

export interface MeetingRowPropsI {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: MeetingI;
  onDelete: (meeting: MeetingI) => void;
  onEdit: (meeting: MeetingI) => void;
}
