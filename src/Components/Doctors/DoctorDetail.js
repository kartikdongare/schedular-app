import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddIcon from '@mui/icons-material/Add';import './Doctor.css';
import AddNewDoctor from './AddNewDoctor';

const DoctorDetail = () => {
  const dispatch=useDispatch();
    const {Id}=useParams();
    const navTo=useNavigate()
    const drList = useSelector((state) => state.drReducer.doctorsData);
    const drHistory=drList.filter((curEle)=>curEle.Id===parseInt(Id))[0];
   const availability = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //  console.log('drList',drHistory.WorkDays)
   const handleDelete=()=>{
    dispatch({type:'DELETE-DR-DATA',payload:Id})
    navTo('/')
   }
  return (
    <Box>
        <Box sx={{display:'flex',justifyContent:'start' ,fontWeight:'bold'}}><Typography variant='span'><ArrowBackIosIcon onClick={()=>navTo('/Doctors')}/></Typography> DOCTER DETAILS</Box>
        <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Box><Button variant="contained" color="error" onClick={handleDelete}>Delete</Button></Box>
        <Box><AddNewDoctor name={{t:'Edit',n:'contained',Id:Id,btn:'UPDATE'}}/></Box>
      </Box>
      <Grid container gap={5}>
            <Grid item md={1} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Typography
                style={{ backgroundImage: drHistory?`url(${drHistory.DrProfile})` :''}}
                className="drPhtots"
              >
                <Typography
                  bgcolor={drHistory?drHistory.Color:''}
                  className="color"
                ></Typography>
              </Typography>
            </Grid>
            <Grid item md={5}>
                <Box marginBottom={2}>
                <Typography fontSize={20} fontWeight={'bold'}>Dr.{drHistory?drHistory.Name:""}</Typography>
                <Typography fontSize={10}>{drHistory?drHistory.Education:""}</Typography>
                <Typography fontSize={15}>{drHistory?drHistory.Designation:''}</Typography>
                </Box>
                <Box  marginBottom={2}>
                  <Typography fontSize={15}>Specialization</Typography>
                  <Typography fontSize={15}>{drHistory?drHistory.Specialization:''}</Typography>
                </Box>
                <Box  marginBottom={2}>
                  <Typography fontSize={15}>Experience</Typography>
                  <Typography fontSize={15}>{drHistory?drHistory.Experience:""}</Typography>
                </Box>
                <Box  marginBottom={2}>
                  <Typography fontSize={15}>Availability</Typography>
                  {drHistory &&Array.isArray(drHistory.AvailableDays)&& drHistory.AvailableDays.map((curEle)=>(
                    <Typography key={curEle} variant='span' fontSize={15}>{availability[curEle]}{"  "}</Typography>
                  ))}
                   - {drHistory&&drHistory.StartHour} -{drHistory&&drHistory.EndHour}
                </Box>
                <Box  marginBottom={2}>
                  <Typography fontSize={15}>Mobile</Typography>
                  <Typography fontSize={15}>{drHistory&&drHistory.Mobile}</Typography>
                </Box>
            </Grid>
            <Grid item md={5}>
              <Box>
                <Stack direction='row' gap={5}> 
                  <Typography>Break Hours</Typography>
                  <Typography sx={{backgroundColor:'#7575ff',borderRadius:'50%',height:'2rem',width:'2rem',color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>  <AddIcon /></Typography>
                </Stack>
                
                {/* { drHistory.WorkDays.map((curEle)=>(
                  <Stack direction='row'>
                    <Box>{curEle.Day}</Box>
                    <Box>{curEle.State!=="TimeOff"?
                    <Stack direction='row'>
                      <Box>
                       
                        </Box>-
                      <Box>
                       
                        helo
                        </Box>
                    </Stack>
                    :'TIMEOFF'
                    }</Box>
                  </Stack>
                ))} */}
              </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default DoctorDetail
