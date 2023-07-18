import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Divider, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AppointmentTable() {
  const todayPatientData=useSelector((state)=>state.drDataReducer.todayAppointment)
  return (
    <TableContainer component={Paper} sx={{boxShadow:'0 0 10px #e3e1dc',borderRadius:'10px'}}>
      <Box sx={{display:'flex',justifyContent:'space-between',margin:'20px 10px 20px 10px'}}>
        <Typography fontWeight={'bold'}>Today's Appointments</Typography>
        <NavLink to='/Schedule'>Book Appointments</NavLink>
      </Box>
      <Divider/>
      <Table  size="small" aria-label="a dense table" sx={{maxHeight:'20rem',overflow:'auto'}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>Time</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Name</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Docter Name</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="left">Symptoms</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {todayPatientData&&todayPatientData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.start.toLocaleString('en-IN', { hour: 'numeric',minute: 'numeric', hour12: true })}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.consultation}</TableCell>
              <TableCell align="left">{row.Symptoms}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
