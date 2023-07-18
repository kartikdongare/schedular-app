import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { Box, Divider, Stack } from "@mui/material";
import ModelBox from "./ModelBox";
export default function DeletEditModelBox({ open1, setOpen1, Id }) {
  const patientsData = useSelector((state) => state.drDataReducer.patientName);
  let alldetailpatient = patientsData.filter((curEle) => curEle.Id === Id)[0];
  const [open, setOpen] = React.useState(false);
  const [clickId,setClickId]=React.useState()
  const dispatch=useDispatch()

  const handleDelete = () => {
    setOpen1(false);
    dispatch({type:'DELETE-PATIENT-DATA',payload:Id})
  };
  const handleEdit = () => {
    setOpen1(false);
    setOpen(true);
  };
  React.useEffect(()=>{
    setClickId(Id)
  },[Id])
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={open1}
         onClose={()=>setOpen1(false)}
        sx={{ width: "30rem", m: "auto" }}
      >
        <DialogTitle>Patient Details</DialogTitle>
        <Divider />
        <DialogContent>
          <Stack direction={"row"} gap={10} mb={2}>
            <Box sx={{ boder: "1px solid black", width: "6rem" }}>
              Patient Id
            </Box>
            <Box>{alldetailpatient&&alldetailpatient.Id}</Box>
          </Stack>
          <Stack direction={"row"} gap={10} mb={2}>
            <Box sx={{ width: "rem" }}>Patient Name</Box>
            <Box>{alldetailpatient&&alldetailpatient.Name}</Box>
          </Stack>
          <Stack direction={"row"} gap={10} mb={2}>
            <Box sx={{ width: "6rem" }}>Gender</Box>
            <Box>{alldetailpatient&&alldetailpatient.Gender}</Box>
          </Stack>
          <Stack direction={"row"} gap={10} mb={2}>
            <Box sx={{ width: "6rem" }}>DOB</Box>
            <Box>{alldetailpatient&&alldetailpatient.DOB.getFullYear()}</Box>
          </Stack>
          <Stack direction={"row"} gap={10} mb={2}>
            <Box sx={{ width: "6rem" }}>Blood Group</Box>
            <Box>{alldetailpatient&&alldetailpatient.BloodGroup}</Box>
          </Stack>
          <Stack direction={"row"} gap={10} mb={2}>
            <Box sx={{ width: "6rem" }}>Mobile No</Box>
            <Box>{alldetailpatient&&alldetailpatient.Mobile}</Box>
          </Stack>
          <Stack direction={"row"} gap={10} mb={2}>
            <Box sx={{ width: "6rem" }}>Email</Box>
            <Box>{alldetailpatient&&alldetailpatient.Email}</Box>
          </Stack>
          <Stack direction={"row"} gap={10} mb={2}>
            <Box sx={{ width: "6rem" }}>Symptoms</Box>
            <Box>{alldetailpatient&&alldetailpatient.Symptoms}</Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="contained" onClick={handleEdit}>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
      <ModelBox open={open} setOpen={setOpen} Id={clickId} btn={'Update'}/>
    </div>
  );
}
