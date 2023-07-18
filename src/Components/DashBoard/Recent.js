import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Recent = () => {
  let drdata = useSelector((state) => state.drReducer.doctorsData);
  const navTo = useNavigate();
  return (
    <Box sx={{ overflowY: "scroll", height: "25rem", marginTop: "0.9rem" }}>
      {drdata.map((curEle, index) => (
        <Box
          key={curEle.Id}
          className="main-recent"
          onClick={() => navTo(`/doctorDetails/${curEle.Id}`)}
        >
          <Box
            style={{ backgroundImage: `url(${curEle.DrProfile})` }}
            className="recent-img"
          >
            <Typography bgcolor={curEle.Color} className="circle"></Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
              Dr. {curEle.Name}
            </Typography>
            <Typography>{curEle.Specialization}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Recent;
