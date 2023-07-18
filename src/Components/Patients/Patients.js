import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Stack, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import ModelBox from './ModelBox'
import DeletEditModelBox from './DeletEditModelBox'

export default function Patients() {
  const patientsData=useSelector((state)=>state.drDataReducer.patientName);
  console.log('patientsData',patientsData)
  // const navTo=useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState('');
  const dispatch=useDispatch()
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [Id,setId]=React.useState(1)
  const handleSearchBar=(e)=>{
    setValue(e.target.value)
    console.log('object',e.target.value)
    dispatch({type:'SEARCH-PATIENT',payload:e.target.value})
  }
  const handleOpen=(Id)=>{
    setOpen1(true) 
    setId(Id)
  }
  // React.useEffect(()=>{
  //   setId(Id)
  // },[Id])

  return (
    <Box>
      <Stack mb={2}>
        <Typography sx={{fontSize:'1.5rem',fontWeight:'bold'}}>PATIENT LIST</Typography>
        <Typography sx={{height:'.4rem',backgroundColor:'#4e03fc',width:'5rem',borderRadius:'1rem'}}></Typography>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='end' gap={3} mb={2}>
        <Stack direction='row'  alignItems='center' justifyContent='center'>
        <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }} size='small' onChange={handleSearchBar}>
        <OutlinedInput placeholder="Search patient...." />
      </FormControl>
    </Box>
        </Stack>
        <Typography>
          <Button variant="contained" onClick={()=>setOpen(true)}>
      Add New Patient
      </Button>
        </Typography>
      </Stack>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell  sx={{fontWeight:'bold'}}>ID</TableCell>
            <TableCell align="left" sx={{fontWeight:'bold'}}>Name</TableCell>
            <TableCell align="left" sx={{fontWeight:'bold'}}>Gender</TableCell>
            <TableCell align="left" sx={{fontWeight:'bold'}}>Blood Group</TableCell>
            <TableCell align="left" sx={{fontWeight:'bold'}}>Symptoms</TableCell>
            <TableCell align="left" sx={{fontWeight:'bold'}}>Mobile Number</TableCell>
            <TableCell align="left" sx={{fontWeight:'bold'}}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientsData&&patientsData.map((row,index) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="left" sx={{color:'#4e03fc',cursor:'pointer'}} onClick={()=>handleOpen(row.Id)}>{row.Name}</TableCell>
              <TableCell align="left">{row.Gender}</TableCell>
              <TableCell align="left">{row.BloodGroup}</TableCell>
              <TableCell align="left">{row.Symptoms.slice(0,25)}...</TableCell>
              <TableCell align="left">{row.Mobile}</TableCell>
              <TableCell align="left">{row.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ModelBox open={open} setOpen={setOpen} btn={'Add'}/>
    <DeletEditModelBox open1={open1} setOpen1={setOpen1} Id={Id}/>
    </Box>
  );
}
