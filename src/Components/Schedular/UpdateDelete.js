import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Stack } from "@mui/material";
import AddAppointment from './AddAppointment'
import { useDispatch } from "react-redux";
export default function UpdateDelete({ open1, setOpen1 ,update}) {
  const dispatch=useDispatch()
    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen1(false);
  };

  const handleDeletecalendar=()=>{
    dispatch({type:'DELETE-APPOINTMENT',payload:update.id})
    setOpen1(false);
  }
  return (
    <div>
      <Dialog
        open={open1}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Stack direction={'row'} gap={10}>
          <Button variant="contained" color="error" onClick={handleDeletecalendar}> Delete</Button>
          <Button variant="contained" onClick={()=>setOpen(true)}>Edit</Button>
          </Stack>
        </DialogContent>
      </Dialog>
      <AddAppointment open={open} setOpen={setOpen} update={update} open1={open1}/>
    </div>
  );
}
