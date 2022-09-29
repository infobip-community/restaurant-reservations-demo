import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {MeetingsPropsI} from "./MeetingsList.types";
import {MeetingI} from "../../app/App.types";

function Row(props: { row:MeetingI }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell align="left">{row.start_datetime}</TableCell>
          <TableCell>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>

                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Participants</TableCell>
                      <TableCell>Where</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {row.description}
                      </TableCell>
                      <TableCell>{`${row.host}, ${row.guest}`}</TableCell>
                      <TableCell align="right">
                        {row.room}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
  );
}


export default function MeetingsList({data}:MeetingsPropsI) {
  return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>When</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
                <Row key={row.title} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
