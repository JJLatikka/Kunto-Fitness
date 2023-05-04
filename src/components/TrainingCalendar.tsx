import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/TrainingCalendar.css";
import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { useState, useEffect } from "react";
import { calendar_style, CalendarEvent } from "../lib/calendar";
import { fetchCalendarEvents } from "../lib/io";

export function TrainingCalendar() {
  const localizer = dayjsLocalizer(dayjs);
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    fetchCalendarEvents(setEvents);
  }, []);

  return (
    <div id="calendar_container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={calendar_style.StyleSheet}
        defaultView="week"
        min={new Date(1972, 0, 1, 7, 0, 0)}
      />
    </div>
  );
}
