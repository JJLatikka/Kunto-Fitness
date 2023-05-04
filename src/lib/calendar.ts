import dayjs from "dayjs";
import { Y } from "./var";

const calendar_style = {
  StyleSheet: {
    height: Y * 0.925,
    backgroundColor: "#a5a5ff",
  },
};

type CalendarEvent = {
  start: any;
  end: any;
  title: string;
};

const getCalendarEvents = (arr: any): CalendarEvent[] => {
  return arr.map((o: any) => {
    let dS = dayjs(o.date);
    let dE = dayjs(dS).minute(dS.minute() + o.duration);
    let t = `${o.customer.firstname} ${o.customer.lastname} / ${o.activity}`;
    return { start: dS.toDate(), end: dE.toDate(), title: t };
  });
};

export { calendar_style, getCalendarEvents };

export type { CalendarEvent };
