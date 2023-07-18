import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MasksIcon from "@mui/icons-material/Masks";
import HealingIcon from "@mui/icons-material/Healing";
import TuneIcon from "@mui/icons-material/Tune";
import InfoIcon from "@mui/icons-material/Info";
const sideBarData = [
  {
    name: "Dashboard",
    icon: <DashboardCustomizeIcon color="info" />,
    routeTo: "/",
  },
  {
    name: "Schedule",
    icon: <EventAvailableIcon color="info" />,
    routeTo: "/schedule",
  },
  { name: "Doctors", icon: <MasksIcon color="info" />, routeTo: "/doctors" },
  {
    name: "Patients",
    icon: <HealingIcon color="info" />,
    routeTo: "/patients",
  },
  {
    name: "Preference",
    icon: <TuneIcon color="info" />,
    routeTo: "/preference",
  },
  { name: "About", icon: <InfoIcon color="info" />, routeTo: "/about" },
];
export default sideBarData;