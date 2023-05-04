import dayjs from "dayjs";
import { X, dateFormat } from "./var";

const trainings_url: string =
  "https://traineeapp.azurewebsites.net/gettrainings";

const trainings_change_url: string =
  "https://traineeapp.azurewebsites.net/api/trainings";

type Training = {
  customer_name: string | null;
  activity: string | null;
  duration: string | null;
  date: any | undefined;
  customer?: object | string | null;
  id?: number;
};

const emptyTraining: Training = {
  customer_name: null,
  activity: null,
  duration: null,
  date: undefined,
};

const validate = (t: Training): boolean => {
  if (t.duration) {
    let d: any = t.duration.toString();
    return !Object.values(t).some((v) => !v) && !isNaN(parseInt(d));
  } else {
    return false;
  }
};

const alertMessage =
  "Fill in all the required information, please.\n" +
  "Duration can be a numeric value only!";

const getTrainings = (arr: any): Training[] => {
  return arr.map((o: any) => {
    return {
      customer_name:
        o.customer && `${o.customer.firstname} ${o.customer.lastname}`,
      activity: o.activity,
      duration: `${o.duration} min.`,
      date: dayjs(o.date).format(dateFormat),
      id: o.id,
    };
  });
};

const gridRW: number = (X * 0.7) / 4;

const dStrToArr = (d: string): string[] => {
  return d
    .trim()
    .replaceAll(" / ", ",")
    .replace(":", " ")
    .replaceAll(" ", ",")
    .split(",");
};

const dateComp = (d1: string, d2: string): number => {
  let c = [d1, d2].map((d) => dStrToArr(d.split(",")[1]));
  return c[0][2] < c[1][2]
    ? -1
    : c[0][2] > c[1][2]
    ? 1
    : c[0][1] < c[1][1]
    ? -1
    : c[0][1] > c[1][1]
    ? 1
    : c[0][0] < c[1][0]
    ? -1
    : c[0][0] > c[1][0]
    ? 1
    : c[0][3] < c[1][3]
    ? -1
    : c[0][3] > c[1][3]
    ? 1
    : c[0][4] < c[1][4]
    ? -1
    : c[0][4] > c[1][4]
    ? 1
    : 0;
};

const columns: object[] = [
  {
    headerName: "Customer Name",
    width: gridRW,
    field: "customer_name",
  },
  {
    headerName: "Activity",
    width: gridRW,
    field: "activity",
  },
  {
    headerName: "Duration",
    width: gridRW,
    field: "duration",
  },
  {
    headerName: "Date",
    width: gridRW,
    field: "date",
    comparator: dateComp,
  },
];

const defColDef: object = {
  sortable: true,
  filter: true,
  floatingFilter: true,
};

export {
  trainings_url,
  trainings_change_url,
  emptyTraining,
  validate,
  alertMessage,
  getTrainings,
  columns,
  defColDef,
};

export type { Training };
