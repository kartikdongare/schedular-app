import * as React from "react";
import "./NavBar.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import SpeedIcon from "@mui/icons-material/Speed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import LazyLoading from "../LazyLoading";
import { Stack } from "@mui/material";
import AddAppointment from "./Schedular/AddAppointment";
const DashBoard = React.lazy(() => import("./DashBoard/DashBoard"));
const Schedular = React.lazy(() => import("../Components/Schedular/Schedular"));
const About = React.lazy(() => import("./About/About"));
const Doctors = React.lazy(() => import("./Doctors/Doctors"));
const Patients = React.lazy(() => import("./Patients/Patients"));
const Preference = React.lazy(() => import("./Preference/Preference"));
const DoctorDetail = React.lazy(() => import("./Doctors/DoctorDetail"));
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  // display: 'flex',
  // alignItems: 'start',
  // justifyContent: 'flex-end',
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,

  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    backgroundColor: "red",
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const history = useNavigate();
  const currPath = useLocation().pathname;
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleNavigate=(text)=>{
    history(`/${text}`)
    setOpen(false)
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              zIndex:1
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems="center"
          >
            {/* <img src='./kisspng-nursing-pin-registered-nurse-health-care-medicine-hand-saw-5ad5c57e1e9416.3596315415239591661253.png' alt='img1' width='50px' style={{color:'white'}}/> */}
            <Typography variant="h6">APPOINTMENT PLANNER</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box sx={{ display: "flex", mt: "10px" ,zIndex:1}}>
          {open && (
            <Box className="main-img">
              <img
                src="240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                alt="Docter pic"
                className="img1"
              />
              <Typography fontWeight={"bold"}>Dr.Smith Nakhwa</Typography>
              <Typography>Admin</Typography>
            </Box>
          )}
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </Box>
        <Divider />
        <List>
          {[
            "Dashboard",
            "Schedule",
            "Doctors",
            "Patients",
            "Preference",
            "About",
          ].map((text, index) => {
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  display: "block",
                  bgcolor: currPath.slice(1) === text ? "#7575ff" : "white",
                  // ml: 2.5,
                  // borderRadius: "30px",
                  // color: currPath.slice(1) === text ? "white" : "",
                }}
                onClick={()=>handleNavigate(text)}              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    borderRadius: "30px",
                     mx: 2.5,
                     color: currPath.slice(1) === text ? "white" : "",
                    //  bgcolor: currPath.slice(1) === text ? "#7575ff" : "white" ,

                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: currPath.slice(1) === text ? "white" : "",
                    }}
                  >
                    {index === 0 ? (
                      <SpeedIcon />
                    ) : index === 1 ? (
                      <CalendarMonthIcon />
                    ) : index === 2 ? (
                      <LocalHospitalIcon />
                    ) : index === 3 ? (
                      <RoomPreferencesIcon />
                    ) : index === 4 ? (
                      <BloodtypeIcon />
                    ) : (
                      <InfoOutlinedIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 5, }}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          {/* <Route
            path="/Schedule"
            element={
              <React.Suspense fallback={<LazyLoading />}>
                <Schedular />
              </React.Suspense>
            }
          /> */}
          <Route path="/Schedule" element={<Schedular />}/>
          {/* <Route
            path="/Doctors"
            element={
              <React.Suspense fallback={<LazyLoading />}>
                <Doctors />
              </React.Suspense>
            }
          /> */}
          <Route path="/Doctors" element={<Doctors />}/>
          {/* <Route
            path="/Patients"
            element={
              <React.Suspense fallback={<LazyLoading />}>
                <Patients />
              </React.Suspense>
            }
          /> */}
          <Route path="/Patients" element={<Patients />}/>
          {/* <Route
            path="/Preference"
            element={
              <React.Suspense fallback={<LazyLoading />}>
                <Preference />
              </React.Suspense>
            }
          /> */}
          <Route path="/Preference" element={<Preference />}/>
          {/* <Route
            path="/About"
            element={
              <React.Suspense fallback={<LazyLoading />}>
                <About />
              </React.Suspense>
            }
          /> */}
          <Route path="/About" element={<About />}/>
          {/* <Route
            path="/doctorDetails/:Id"
            element={
              <React.Suspense fallback={<LazyLoading />}>
                <DoctorDetail/>
              </React.Suspense>
            }
          /> */}
          <Route path="/doctorDetails/:Id" element={<DoctorDetail />}/>
          <Route path="/addAppointment" element={<AddAppointment />} />
        </Routes>
      </Box>
    </Box>
  );
}
