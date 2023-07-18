import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
  Box,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
export default function FormDialog({ open, setOpen, open1,update,today }) {
  //   const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch()
  const pData = useSelector((state) => ({
    patientName: state.drDataReducer.patientName,
    specializationData: state.drReducer.specializationData,
    // addCalendarData:state.drDataReducer.addCalendarData
    hospitalData:state.drReducer.hospitalData
  }));

  
  const filterPatientName = pData.patientName.map((curEle) => curEle.Name);
  const Specialization = pData.specializationData.map((curEle) => curEle.Text);
  const [inputValue, setInputValue] = React.useState("");
  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [consultation,setConsultation]=React.useState(['Nembo Lukeni','Yara Barros'])

  let [dr, setDr] = React.useState({
    name: "",
    title:'',
    location: "",
    start:"",
    end: "",
    department: "",
    consultation: "",
    Symptoms: "",
    id:'',
  });
 
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddApp=()=>{
     dispatch({type:'ADD-CALENDAR-DATA',payload:dr})
    setOpen(false)
    // dispatch({type:'TODAY-APPOINMENT',payload:today})
    // dispatch({type:'TOTAL-APPOINMENT',payload:getThisWeekEvents()})
  }
  React.useEffect(()=>{
    
    setDr({...dr,id:Math.floor((Math.random() * 100) + 1)})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[open])
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Appointment</DialogTitle>
        <DialogContent>
          <Box>
            <InputLabel sx={{ fontWeight: "bold" }}>Patient Name</InputLabel>
            <Stack mb={2} direction={"row"} gap={2}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                onChange={(event, newValue) => {
                  setDr({...dr,name:newValue})
                  setDr({...dr,title:newValue})
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                options={filterPatientName}
                fullWidth
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography
                // variant="contained"
                sx={{
                  width: "30px",
                  height: "30px",
                  bgcolor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  borderRadius: "50%",
                }}
              >
                <AddIcon />
              </Typography>
            </Stack>
            <Stack direction="row" gap={2} mb={2}>
              <Box>
                <InputLabel sx={{ fontWeight: "bold" }}>Title</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(event, newValue) => {
                    // setDr({...dr,Title:event.target.value})
                  }}
                />
              </Box>
              <Box>
                <InputLabel sx={{ fontWeight: "bold" }}>Location</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(event, newValue) => {
                    setDr({...dr,location:event.target.value})
                  }}
                />
              </Box>
            </Stack>
            <Stack direction="row" gap={2} mb={2}>
              <Box>
                <InputLabel sx={{ fontWeight: "bold" }}>Start</InputLabel>
                <TextField
                  id="outlined-basic"
                  type="datetime-local"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(event, newValue) => {
                    setDr({...dr,start:new Date(event.target.value)})
                  }}
                />
              </Box>
              <Box>
                <InputLabel sx={{ fontWeight: "bold" }}>End</InputLabel>
                <TextField
                  id="outlined-basic"
                  type="datetime-local"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(event, newValue) => {
                    setDr({...dr,end:new Date(event.target.value)})
                  }}
                />
              </Box>
            </Stack>
            <Stack mb={2}>
              <InputLabel sx={{ fontWeight: "bold" }}>Department</InputLabel>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                 options={Specialization}
                onChange={(event, newValue2) => {
                  setDr({...dr,department:newValue2})
                }}
                inputValue={inputValue2}
                onInputChange={(event, newInputValue2) => {
                  setInputValue2(newInputValue2);
                }}
                fullWidth
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
            <Stack mb={2}>
              <InputLabel sx={{ fontWeight: "bold" }}>Cunsultation</InputLabel>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                 options={consultation}
                fullWidth
                onChange={(event, newValue1) => {
                  setDr({...dr,consultation:newValue1})
                }}
                inputValue={inputValue1}
                onInputChange={(event, newInputValue1) => {
                  setInputValue1(newInputValue1);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
            <Stack mb={2}>
              <InputLabel sx={{ fontWeight: "bold" }}>Symptom</InputLabel>
              <TextField type="text" onChange={(e)=>setDr({...dr,Symptoms:e.target.value})}></TextField>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddApp}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
