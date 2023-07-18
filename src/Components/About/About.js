import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GridOnIcon from '@mui/icons-material/GridOn';
import ForestIcon from '@mui/icons-material/Forest';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const About = () => {
  return (
    <Box>
      <Stack mb={2}>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          About
        </Typography>
        <Typography
          sx={{
            height: ".4rem",
            backgroundColor: "#4e03fc",
            width: "3rem",
            borderRadius: "1rem",
          }}
        ></Typography>
      </Stack>
      <Typography  > The Example Clinic demo application showcases using several Essential JS 2 React MUI components together in a real-world application scenario. You can further explore the 
      <Typography variant="span" color={'#4e03fc'}> source code</Typography> of this application and use it as a reference for integrating Essential JS React muiUI components into your applications. 
       </Typography>
       <Typography variant="h6" fontWeight={'bold'} mt={2}>List of EJ2 React MUI components used in this sample</Typography>

       <Stack direction={'row'} justifyContent={'space-between'} mt={2} color={'#4e03fc'} flexWrap={'wrap'}>
        <Stack direction={'row'} gap={1}>
          <ChecklistRtlIcon/>
          <Typography>CheckBox</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <DateRangeIcon/>
          <Typography>Date Picker</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <RadioButtonCheckedIcon/>
          <Typography>Button</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <AccessTimeIcon/>
          <Typography>Schedule</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <ForestIcon/>
          <Typography>TreeView</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <GridOnIcon/>
          <Typography>Grid</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <BarChartIcon/>
          <Typography>Chart</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <FormatListBulletedIcon/>
          <Typography>Time Picker</Typography>
        </Stack>
       </Stack>
    </Box>
  );
};

export default About;
