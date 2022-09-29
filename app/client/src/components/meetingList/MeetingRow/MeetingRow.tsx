import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { MeetingRowPropsI } from "./MeetingRow.types";
import styled from "@emotion/styled";

const IconContainer = styled.span`
  margin-right: 0.5rem;
`;

const StyledRow = styled(TableRow)`
  background: #f8f8f8;
`;

const MeetingRow = ({
  data: meeting,
  onDelete,
  onEdit,
  open,
  setOpen,
}: MeetingRowPropsI) => {

  return (
    <>
      <StyledRow>
        <TableCell>{meeting.title}</TableCell>
        <TableCell>{`${meeting.date} ${meeting.start_time} to ${meeting.end_time}`}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </StyledRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell width={226}>Description</TableCell>
                    <TableCell>Participants</TableCell>
                    <TableCell>Where</TableCell>
                    <TableCell/>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{meeting.description}</TableCell>
                    <TableCell>{`${meeting.host}, ${meeting.guest}`}</TableCell>
                    <TableCell>{meeting.room}</TableCell>
                    <TableCell width={64}>
                      <IconContainer>
                        <EditIcon onClick={() => onEdit(meeting)} />
                      </IconContainer>
                      <DeleteIcon onClick={() => onDelete(meeting)} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default MeetingRow;
