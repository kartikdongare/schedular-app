import { Grid, Typography } from "@mui/material";
import React, { Suspense, useEffect } from 'react'
import "./DashBoard.css";
import Box from '@mui/material/Box';
import { NavLink, useLocation } from "react-router-dom";
import LazyLoading from '../../LazyLoading'
import { useDispatch, useSelector } from "react-redux";
const AppointmentTable= React.lazy(()=>import("./AppointmentTable")) ;
const Graph =React.lazy(()=>import("./Graph")) ;
const RecentActivity =React.lazy(()=>import('./RecentActivity')) ;
const Recent= React.lazy(()=>import("./Recent")) ;
const DashBoard = () => {
const dispatch=useDispatch();
const data= useSelector((state=>({
  doctorsData:state.drReducer.doctorsData,
  patientsData:state.drReducer.patientsData,
  todayAppointment:state.drDataReducer.todayAppointment,
  totalAppointment:state.drDataReducer.totalAppointment
})))
const path=useLocation().pathname;
useEffect(()=>{
  dispatch({type:'SET-DRDATA',payload:data})
  // eslint-disable-next-line
},[path])
  return (
    <Box>
      <Grid container gap={5} >
        <Grid item md={8.5} container gap={3}>
          <Grid item md={12} container gap={7}>
            <Grid item xs={12} sm={12} md={5.5}  className="App1">
              <Typography
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  mb:'1rem'
                }}
              >
                Total Appointment Today
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-around" ,alignItems:'center'}}
              >
                <Typography>
                <img
                  src="icons8-appointment-64.png"
                  alt="img2"
                  style={{ opacity: "0.1", transform: "rotate(-20deg)" }}
                />
                </Typography>
                <Typography
                  style={{ fontSize: "50px" }}
                  alignContent="center"
                  color={"primary"}
                >
                  {data.todayAppointment.length||0}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}  md={5.5}  className="App1">
              <Typography
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  mb:'1rem'
                }}
              >
                Total Appointment-This week
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Typography>
                <img
                  src="icons8-appointment-64.png"
                  alt="img2"
                  style={{ opacity: "0.1", transform: "rotate(-20deg)" }}
                />
                </Typography>
                <Typography
                  style={{ fontSize: "50px" }}
                  alignContent="center"
                  color={"primary"}
                >
                  {data.totalAppointment||0}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <Suspense fallback={<LazyLoading/>}>
            <AppointmentTable />
            </Suspense>
          </Grid >
          <Grid item xs={12} sm={12} md={12} className="App1" >
            <Typography fontSize={'1.5rem'} fontWeight={'bold'}>consultation</Typography>
            <Suspense fallback={<LazyLoading/>}>
            <Graph />
            </Suspense>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}  container gap={4} >
          <Grid item md={12} className="App1" alignItems='baseline'>
          <Typography sx={{fontWeight:'bold',fontSize:'1rem',}}>Recent Activity</Typography>
          <Suspense fallback={<LazyLoading/>}>
            <RecentActivity/>
            </Suspense>
            </Grid> 
          <Grid item xs={12} md={12} className="App1">
            <Box sx={{display:'flex',justifyContent:"space-between" ,}}>
          <Typography sx={{fontWeight:'bold',fontSize:'1rem',}}>Doctor's Availability</Typography>
          <NavLink to={'/Doctors'}>View All</NavLink>
          </Box>
          <Suspense fallback={<LazyLoading/>}>
            <Recent/>
            </Suspense>
            </Grid> 
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
