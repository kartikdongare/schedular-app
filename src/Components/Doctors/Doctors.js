import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import "./Doctor.css";
import { useNavigate } from "react-router-dom";
import AddNewDoctor from "./AddNewDoctor";
const Doctors = () => {
  const NavTo = useNavigate();
  const dispatch = useDispatch();

  const drData = useSelector((state) => state.drDataReducer.drData);
  const specification = useSelector(
    (state) => state.drDataReducer.specification
  );

  const [value, setValue] = React.useState(specification);
  const [inputValue, setInputValue] = React.useState("");
  console.log('specification', specification);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({ type: "FILTER-DR", payload: newValue });
  };

  useEffect(() => {
    dispatch({ type: "SET-SPECTFICATION" });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drData]);
  return (
    <Box>
      <Box
        sx={{
          fontSize: "2rem",
          borderBottom: "5px solid blue",
          width: "10rem",
          mb: "2rem",
        }}
      >
        Docter List
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Box>
          <div>
            <Autocomplete
              value={value}
              onChange={handleChange}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={specification}
              sx={{ width: 250 }}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Select a Specilazation" />
              )}
            />
          </div>
        </Box>
        <Box>
          <AddNewDoctor
            name={{ t: "Add New Doctor", n: "outlined", btn: "Add" }}
          />
        </Box>
      </Box>
      <Grid container >
        {drData &&
          Array.isArray(drData) &&
          drData.map((curEle) => (
            <Grid
              item
              xs={12}
              sm={12}
              xl={5}
              md={5.8}
              key={curEle.Id}
              className="doctor-back"
              margin={"0 10px 10px 0"}
            >
              <Box
                sx={{ display: "flex" }}
                onClick={() => NavTo(`/doctorDetails/${curEle.Id}`)}
              >
                <Typography
                  style={{
                    backgroundImage: `url(${curEle.DrProfile})`,
                    marginRight: "2rem",
                  }}
                  className="drPhtots"
                >
                  <Typography
                    bgcolor={curEle.Color}
                    className="color"
                  ></Typography>
                </Typography>
                <Typography>
                  <Box>
                    <Typography variant="p" fontWeight={"bold"}>
                      Dr.{curEle.Name}
                    </Typography>
                    <Typography fontSize={"small"}>
                      {curEle.Education}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box borderRight={"1px solid black"} marginRight={2}>
                        <Typography
                          marginRight={2}
                          variant="p"
                          fontWeight={"bold"}
                        >
                          Designation
                        </Typography>
                        <Typography marginRight={2} fontSize={"small"}>
                          {curEle.Designation}
                        </Typography>
                      </Box>
                      <Box marginRight={2}>
                        <Typography variant="p" fontWeight={"bold"}>
                          Experience
                        </Typography>
                        <Typography fontSize={"small"}>
                          {curEle.Experience}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Doctors;
