import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Divider, InputLabel, Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddNewDoctor(props) {
  const timingExp=useSelector((state)=>({
    doctorsData:state.drReducer.doctorsData,
    dutyTimingsData:state.drReducer.dutyTimingsData,
    experienceData:state.drReducer.experienceData,
    specializationData:state.drReducer.specializationData
  }))
  const dispatch=useDispatch();
  const navTo=useNavigate()
  const target=React.useRef()

 
  const specializationData=timingExp.specializationData.map((curEle)=>curEle.Text);
  const dutyTimingsData=timingExp.dutyTimingsData.map((curEle)=>curEle.Text);
  const experienceData=timingExp.experienceData.map((curEle)=>curEle.Text);
  const doctorsData=timingExp.doctorsData.filter((curEle)=>curEle.Id===parseInt(props.name.Id))

  const [open, setOpen] = React.useState(false);
  const [deptValue, setDeptValue] = React.useState(specializationData[0]);
  const [expValue, setExptValue] = React.useState(experienceData[0]);
  const [dutyValue, setDutytValue] = React.useState(dutyTimingsData[0]);
  const [name,setName]=React.useState(doctorsData[0]?doctorsData[0].Name:'');
  const [gender,setgender]=React.useState(doctorsData[0]?doctorsData[0].Gender:'');
  const [mobileNo,setMobileNo]=React.useState(doctorsData[0]?doctorsData[0].Mobile:'');
  const [email,setEmail]=React.useState(doctorsData[0]?doctorsData[0].Email:'');
  const [educ,setEduc]=React.useState(doctorsData[0]?doctorsData[0].Education:'');
  const [proPhoto,setProPhoto]=React.useState(doctorsData[0]?doctorsData[0].DrProfile:'');
  const [design,setDesign]=React.useState(doctorsData[0]?doctorsData[0].Designation:'');
  const drAddData={
    Name: name,
    Gender: gender,
    Text: 'NemboLukni',
    Id:props.name.btn==='UPDATE'? (doctorsData[0]&&doctorsData[0].Id):(timingExp && timingExp.doctorsData.length+1),
    DepartmentId: 1,
    Color: '#ea7a57',
    Education: educ,
    Specialization: deptValue,
    Experience: expValue,
    Designation: design,
    DutyTiming: dutyValue,
    Email: email,
    Mobile: mobileNo,
    DrProfile:proPhoto,
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=()=>{
    setOpen(false);
    if(target.current.innerText==='ADD'){
       dispatch({type:"Add-DR-DATA",payload:drAddData})
    }else{
      dispatch({type:'UPDATE-DR-DATA',payload:drAddData})
    }
    navTo('/')
  }
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeGender = (e) => {
    setgender(e.target.value);
  };

  const handleChangeMobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeDept = (e, newValue) => {
    setDeptValue(newValue);
  };

  const handleChangeEdt = (e) => {
    setEduc(e.target.value)
  };
  const handleChangeExp = (e, newValue) => {
    setExptValue(newValue);
  };
  const handleChangeDuty = (e, newValue) => {
    setDutytValue(newValue);
  };
  const handleChangePhoto=(e)=>{
    setProPhoto(URL.createObjectURL(e.target.files[0]))
  }
  const handleChangeDesig=(e)=>{
    setDesign(e.target.value)
  }
  return (
    <div>
      <Button variant={props.name.n} onClick={handleClickOpen}>
        {props.name.t}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Docter</DialogTitle>
        <Divider />
        <DialogContent>
          <Box mb={2}>
            <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Docter Name
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
          <Box mb={2}>
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
          <Box mb={2}>
            <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Mobile Number
            </InputLabel>
            <TextField
            value={mobileNo}
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleChangeMobileNo}
            />
          </Box>
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
          <Stack direction="row" gap={5} mb={2}>
            <Box>
              <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Department
              </InputLabel>
              <Autocomplete
                value={deptValue}
                id="combo-box-demo"
                options={specializationData}
                sx={{ width: 180 }}
                size="small"
                renderInput={(params) => <TextField {...params} />}
                onChange={handleChangeDept}
              />
            </Box>
            <Box>
              <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Education
              </InputLabel>
              <TextField
              value={educ}
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ width: 180 }}
                onChange={handleChangeEdt}
              />
            </Box>
          </Stack>
          <Stack direction="row" gap={5} mb={2}>
            <Box>
              <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Experience
              </InputLabel>
              <Autocomplete
                disablePortal
                value={expValue}
                id="combo-box-demo"
                options={experienceData}
                sx={{ width: 180 }}
                size="small"
                renderInput={(params) => <TextField {...params} />}
                onChange={handleChangeExp}
              />
            </Box>
            <Box>
              <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Designation
              </InputLabel>
              <TextField
                value={design}
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ width: 180 }}
                onChange={handleChangeDesig}
              />
            </Box>
          </Stack>
         
            <Box mb={2}>
              <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Duty Timing
              </InputLabel>
              <Autocomplete
                disablePortal
                value={dutyValue}
                id="combo-box-demo"
                options={dutyTimingsData}
                // sx={{ width: 180 }}
                size="small"
                renderInput={(params) => <TextField {...params} />}
                onChange={handleChangeDuty}
              />
            </Box>
            <Box>
              <form onChange={handleChangePhoto} >
                <label style={{ fontWeight: "bold", fontSize: "15px" }}>Upload Profile photo:-</label>
                <input type="file"  id="myFile" name="filename" />
              </form>
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="success" ref={target} name={props.name.btn}>
            {props.name.btn}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
