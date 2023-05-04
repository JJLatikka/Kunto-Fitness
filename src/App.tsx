import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Home } from "./components/Home";
import { Customers } from "./components/Customers";
import { Trainings } from "./components/Trainings";
import { TrainingCalendar } from "./components/TrainingCalendar";
import { TrainingStatistics } from "./components/TrainingStatistics";
import { tab_style_override } from "./lib/var";

export default function App() {
  const [tab, setTab] = useState("home");
  const changeTab = (_: any, v: string) => setTab(v);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Tabs sx={tab_style_override} value={tab} onChange={changeTab}>
        <Tab value="home" label="HOME" />
        <Tab value="customers" label="CUSTOMERS" />
        <Tab value="trainings" label="TRAININGS" />
        <Tab value="calendar" label="CALENDAR" />
        <Tab value="statistics" label="STATISTICS" />
      </Tabs>
      {tab === "home" && <Home />}
      {tab === "customers" && <Customers />}
      {tab === "trainings" && <Trainings />}
      {tab === "calendar" && <TrainingCalendar />}
      {tab === "statistics" && <TrainingStatistics />}
    </LocalizationProvider>
  );
}
