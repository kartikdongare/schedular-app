import React, { useCallback, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Grid } from "@mui/material";
import AddAppointment from "./AddAppointment";
import RightSelector from "./RightSelector";
import UpdateDelete from './UpdateDelete'
import { useDispatch, useSelector } from "react-redux";
import WaitingList from './WaitingList'
const Schedular = (props) => {
  const localizer = momentLocalizer(moment);
  const dispatch=useDispatch()
  const hospitalData=useSelector((state)=>state.drReducer.hospitalData);
  const preferenceData=useSelector((state)=>state.drDataReducer.preferenceData)
 let slot= preferenceData.time&&(preferenceData.timeS.slice(0,2))
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const [update,setUpdate]=useState({});
  // eslint-disable-next-line
  const handleSlotSelect = useCallback(({ start, end }) => {
    setOpen(true);
  });
  // eslint-disable-next-line
  const handleSelectEvent = useCallback((event) => {
    setUpdate(event)
    setOpen1(true)
    
  });
  const getTodayEvents = () => {
   
    const today = moment().startOf('day');
    return hospitalData.filter(event => moment(event.start).isSame(today, 'day'));
  };

  const getThisWeekEvents = () => {
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');
    return hospitalData.filter(
      event =>
        moment(event.start).isBetween(startOfWeek, endOfWeek, 'day', '[]')
    );
  };

  useEffect(()=>{
    console.log('called')
    dispatch({type:'TODAY-APPOINMENT',payload:getTodayEvents()})
    dispatch({type:'TOTAL-APPOINMENT',payload:getThisWeekEvents()})
    // eslint-disable-next-line
  },[open])
  return (
    <Grid container gap={3}>
      <Grid
        item
        xs={12}
        md={9}
        className="myCustomHeight"
        style={{ height: "100vh" }}
      >
        <Calendar
          localizer={localizer}
          events={hospitalData}
          startAccessor="start"
          endAccessor="end"
          defaultView={preferenceData.defaultDays||'month'}
          selectable
          timeslots={1}
          step={slot||10}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSlotSelect}
          eventPropGetter={(e) => {
            if (e.department === 'GENERAL MEDICINE') {
                return { style: { backgroundColor: '#df5286' } }
            } else if (e.department === 'NEUROLOGY') {
                return { style: { backgroundColor: '#1aaa55' } }
            } else if (e.department === 'DERMATOLOGY') {
                return { style: { backgroundColor: '#865fcf' } }
            } else if (e.department === 'ORTHOPEDICS') {
                return { style: { backgroundColor: '#fce200' } }
            } else if (e.department === 'DIABETOLOGY') {
                return { style: { backgroundColor: '#ea7a57' } }
            } else if (e.department === 'CARDIOLOGY') {
                return { style: { backgroundColor: '#00bdae' } }
            }
        }}
        
        />
      </Grid>
      <Grid item xs={12} md={2.5}>
      <Grid item xs={12} md={12}>
      <RightSelector />
       </Grid>
       <Grid item xs={12} md={12}>
        <WaitingList/>
       </Grid>
      </Grid>
      
      <AddAppointment
        open={open}
        setOpen={setOpen}
        // setAddslot={setAddslot}
        // addSlot={addSlot}
        // today={getTodayEvents()}
        btn={'Add'}
      />
      <UpdateDelete  open1={open1} setOpen1={setOpen1} update={update}/>
    </Grid>
  );
};
export default Schedular;
