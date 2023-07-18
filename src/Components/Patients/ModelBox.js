/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { Box, InputLabel, Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ModelBox({open,setOpen,Id,btn}) {
  const dispatch=useDispatch();
  const navTo=useNavigate()
  const target=React.useRef()
  // const [x, setx] = React.useState(false);
  const bloodGroupData=useSelector((state)=>state.drReducer.bloodGroupData);
  const patientsData=useSelector((state)=>state.drReducer.patientsData);
  let updatepatient=patientsData.filter((curEle)=>curEle.Id===Id)
  // if(Id){
  //   setx(true)
  // }
  // console.log('updatepatient edit',updatepatient)
  const bgList=bloodGroupData.map((curEle)=>curEle.Text);

  const [name,setName]=React.useState(updatepatient[0]?updatepatient[0].Name:'');
  const [gender,setGender]=React.useState(updatepatient[0]?updatepatient[0].Gender:'');
  const [dob,setDob]=React.useState(updatepatient[0]?updatepatient[0].DOB:'');
  const [bg,setBg]=React.useState(updatepatient[0]?updatepatient[0].BloodGroup:'');
  const [mbn,setMbn]=React.useState(updatepatient[0]?updatepatient[0].Mobile:'');
  const [email,setEmail]=React.useState(updatepatient[0]?updatepatient[0].Email:'')
  const [symptoms,setSymptoms]=React.useState(updatepatient[0]?updatepatient[0].Symptoms:'');

  React.useEffect(()=>{
setName(updatepatient[0]&&updatepatient[0].Name)
setGender(updatepatient[0]&&updatepatient[0].Gender)
setDob(updatepatient[0]&&updatepatient[0].DOB)
setBg(updatepatient[0]&&updatepatient[0].BloodGroup)
setMbn(updatepatient[0]&&updatepatient[0].Mobile)
setEmail(updatepatient[0]&&updatepatient[0].Email)
setSymptoms(updatepatient[0]&&updatepatient[0].Symptoms)

  },[Id])
  console.log('Id',Id)
  // const handleClickOpen = () => {
  //   setOpen(true);

  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit=()=>{
    setOpen(false);
    if(btn==='Add'){
      dispatch({type:'ADD-PATIENT',payload:allPatientData})
    }else{
      dispatch({type:'UPDATE-PATIENT',payload:allPatientData})
    }
    navTo('/')
  }

  const allPatientData={
    Id:btn==='Add'? patientsData.length+1:updatepatient[0]&&updatepatient[0].Id,
    Name: name,
    Text: name,
    DOB: new Date(dob),
    Mobile: mbn,
    Email: email,
    // Address: '507 - 20th Ave. E.\r\nApt. 2A',
    // Disease: 'Eye Checkup',
    // DepartmentName: 'GENERAL',
    BloodGroup: bg,
    Gender: gender,
    Symptoms: symptoms
  }
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeDob=(e)=>{
    setDob(e.target.value)
  }

  const handleChangeBG=(e)=>{
    setBg(e.target.value)
  }

  const handleChangeMobileNo=(e)=>{
    setMbn(e.target.value)
  }
  const handleChangeEmail=(e)=>{
    setEmail(e.target.value)
  }

  const handleChangeSmt=(e)=>{
    setSymptoms(e.target.value)
  }
  return (
    <div>
     {/* <Button variant="contained" onClick={handleClickOpen}>
      Add New Patient
      </Button> */}
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>New Patient</DialogTitle>
        <DialogContent>
        <Box mb={1}>
            <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Patient Name
            </InputLabel>
            <TextField
              value={name}
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleChangeName}
            />
          </Box>
          <Box mb={1}>
            <FormControl>
              <FormLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={gender}
                onChange={handleChangeGender}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box mb={1}>
            <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Date of Birth
            </InputLabel>
            <TextField
            value={dob}
              id="outlined-basic"
              variant="outlined"
              type='date'
              size="small"
              fullWidth
              onChange={handleChangeDob}
            />
          </Box>
          <Stack direction='row' mb={1}>
          <Box >
          <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Blood Groop+
              </InputLabel>
              <Autocomplete
                value={bg}
                id="combo-box-demo"
                options={bgList}
                sx={{ width: '10rem',mr:'1rem'}}
                size="small"
                renderInput={(params) => <TextField {...params} />}
                 onChange={handleChangeBG}
              />
          </Box>
          <Box >
            <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Mobile Number
            </InputLabel>
            <TextField
            value={mbn}
            sx={{width:'10rem'}}
              id="outlined-basic"
              variant="outlined"
              size="small"
               onChange={handleChangeMobileNo}
            />
          </Box>
          </Stack>
          <Box mb={2}>
            <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Email
            </InputLabel>
            <TextField
            value={email}
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
               onChange={handleChangeEmail}
            />
          </Box>
          <Box mb={1}>
            <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
            Symptoms
            </InputLabel>
            <TextField
            value={symptoms}
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleChangeSmt}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} ref={target}>{btn&&btn}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
