import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import AddNewDoctor from '../Doctors/AddNewDoctor'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RightSelector = () => {
    let drdata = useSelector((state) => state.drReducer.doctorsData);
    const navTo = useNavigate();
    const [age, setAge] = React.useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Search Doctor</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            label="Search Doctor"
            sx={{height:'3rem'}}
          >
            <Box maxHeight={'20rem'} overflow={'auto'}>
            {drdata.map((curEle, index) => (
              <MenuItem>
                <Box
                  key={curEle.Id}
                  mb={0.2}
                  className="main-recent"
                  onClick={() => navTo(`/doctorDetails/${curEle.Id}`)}
                >
                  <Typography
                    style={{ backgroundImage: `url(${curEle.DrProfile})` }}
                    className="recent-img"
                  >
                    <Typography
                      bgcolor={curEle.Color}
                      className="circle"
                    ></Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontSize: ".8rem", fontWeight: "bold" }}>
                      Dr. {curEle.Name}
                    </Typography>
                    <Typography sx={{ fontSize: ".7rem" }}>
                      {curEle.Specialization}
                    </Typography>
                  </Typography>
                </Box>
              </MenuItem>
            ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddNewDoctor name={{ t: "Add New Doctor", n: "", btn: "Add" }} />
            </Box>
          </Select>
        </FormControl>
  )
}

export default RightSelector
