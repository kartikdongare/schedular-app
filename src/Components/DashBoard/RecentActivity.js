import * as React from "react";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
export default function RecentActivity() {
  let activityData = useSelector((state) => state.drReducer.activityData);
  let clr = ["red", "blue", "yellow", "blue", "pink", "red"];
  return (
    <Box sx={{ overflowY: "scroll", height: "25rem", marginTop: "0.9rem" }}>
      {activityData &&
        activityData.map((curEle, index) => (
          <Box
          key={index}
            sx={{
              borderLeft: `1px solid ${clr[index]}`,
              marginBottom: "2rem",
              paddingLeft: "1rem",
            }}
            
          >
            <Box
              fontSize={".9rem"}
              color={"green"}
              fontWeight={"bold"}
            >
              {curEle.Name}
            </Box>
            -<Box >{curEle.Message}</Box>
            <Typography sx={{ opacity: "0.5" }}>{curEle.Time}</Typography>
          </Box>
        ))}
    </Box>
  );
}
