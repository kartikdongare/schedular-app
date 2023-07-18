import { Box, InputLabel, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";

const Preference = () => {
  const dispatch=useDispatch()
  let preferData = useSelector((state) => ({
    timeSlots: state.drReducer.timeSlots.map((curEle) => curEle.Text),
    startHours: state.drReducer.startHours.map((curEle) => curEle.Text),
    endHours: state.drReducer.endHours.map((curEle) => curEle.Text),
    views: state.drReducer.views.map((curEle) => curEle.Text),
    colorCategory: state.drReducer.colorCategory.map((curEle) => curEle.Text),
    dayOfWeekList: state.drReducer.dayOfWeekList.map((curEle) => curEle.Text),
  }));
  let kd=['month','day','week']
  const [defaultDays, setSetDefaultDays] = useState(kd[0]);
  // eslint-disable-next-line
  const [startH, setStartH] = useState(preferData.startHours[0]);
  // eslint-disable-next-line
  const [endH, setendH] = useState(preferData.endHours[0]);
  // eslint-disable-next-line
  const [colorCat, setColorCat] = useState(preferData.colorCategory[0]);
  // eslint-disable-next-line
  const [dayOfWeek, setDayOfWeek] = useState(preferData.dayOfWeekList[0]);
  const [timeS, setTimeS] = useState(preferData.timeSlots[0]);
  const [inputValue, setInputValue] = React.useState('');
  useEffect(()=>{
    dispatch({type:'PREFERENCE-DATA',payload:{defaultDays:defaultDays,timeS:timeS}})
  },
  // eslint-disable-next-line
  [defaultDays])
  return (
    <Box >
      <Stack mb={2}>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          PREFERENCE
        </Typography>
        <Typography
          sx={{
            height: ".4rem",
            backgroundColor: "#4e03fc",
            width: "5rem",
            borderRadius: "1rem",
          }}
        ></Typography>
      </Stack>
      <Stack>
      <Stack mb={2}>
          <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
            Default View
          </InputLabel>
          <Autocomplete
            disablePortal
            value={defaultDays}
            size="small"
            id="combo-box-demo"
        onChange={(event, newValue) => {
          setSetDefaultDays(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
            options={kd}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <Stack mb={2}>
          <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
            Calendar Start Time
          </InputLabel>
          <Autocomplete
            disablePortal
            value={startH}
            size="small"
            id="combo-box-demo"
            options={preferData.endHours}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <Stack mb={2}>
          <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
            Calendar end time
          </InputLabel>
          <Autocomplete
            disablePortal
            value={endH}
            size="small"
            id="combo-box-demo"
            options={preferData.views}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <Stack mb={2}>
          <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
            Slot Duration
          </InputLabel>
          <Autocomplete
            disablePortal
            value={timeS}
            size="small"
            id="combo-box-demo"
            options={preferData.timeSlots}
            onChange={(event, newValue) => {
              setTimeS(newValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <Stack mb={2}>
          <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
           Booking Color
          </InputLabel>
          <Autocomplete
            disablePortal
            value={colorCat}
            size="small"
            id="combo-box-demo"
            options={preferData.colorCategory}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <Stack mb={2}>
          <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
           First Day of Week
          </InputLabel>
          <Autocomplete
            disablePortal
            value={dayOfWeek}
            size="small"
            id="combo-box-demo"
            options={preferData.dayOfWeekList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Preference;
