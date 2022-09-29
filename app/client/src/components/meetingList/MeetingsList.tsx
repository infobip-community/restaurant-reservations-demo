import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MeetingsPropsI, RowPropsI } from "./MeetingsList.types";
import { MeetingI } from "../../app/App.types";

import { useState } from "react";
import { APIPath } from "../../const";

import MeetingRow from "./MeetingRow/MeetingRow";
import EditMeetingRow from "./EditMeetingRow/EditMeetingRow";
import styled from "@emotion/styled";

const StyledRow = styled(TableRow)`
  background: rgb(211 222 234);
`;

const Row = ({ data, isLoading, onDelete, onSave }: RowPropsI) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  const onCancel = () => {
    setIsEditing(false);
  };

  const handleSave = async (meeting: MeetingI) => {
    await onSave(meeting);
    setIsEditing(false);
  };

  return isEditing ? (
    <EditMeetingRow
      open={open}
      setOpen={setOpen}
      data={data}
      onCancel={onCancel}
      isLoading={isLoading}
      onSave={handleSave}
    />
  ) : (
    <MeetingRow
      open={open}
      setOpen={setOpen}
      data={data}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

const MeetingsList = ({
  data,
  onUpdate,
  isLoading,
  setAlertMessage,
}: MeetingsPropsI) => {
  const onSave = async (meeting: MeetingI) => {
    setAlertMessage({ isLoading: true });
    const promise = fetch(`${APIPath}`, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(meeting),
    }).catch((error) => {
      setAlertMessage({ message: error, isVisible: true });
    });

    await promise;
    setAlertMessage({ isVisible: true, isLoading: false });
    onUpdate();
    return promise;
  };

  const onDelete = async (meeting: MeetingI) => {
    setAlertMessage({ isLoading: true });

    await fetch(`${APIPath}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(meeting),
    }).catch((error) => {
      setAlertMessage({ message: error, isVisible: true });
    });

    setAlertMessage({
      message: "Your meeting has been removed succesfully",
      isVisible: true,
    });
    onUpdate();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <StyledRow>
              <TableCell width={250}>Title</TableCell>
              <TableCell>When</TableCell>
              <TableCell />
            </StyledRow>
          </TableHead>
          <TableBody>
            {data.map((meeting) => (
              <Row
                isLoading={isLoading}
                key={meeting.id}
                data={meeting}
                onSave={onSave}
                onDelete={onDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
    </>
  );
};
export default MeetingsList;
