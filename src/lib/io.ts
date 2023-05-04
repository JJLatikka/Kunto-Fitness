import { customers_url, Customer, getCustomers } from "./customer";
import {
  trainings_url,
  trainings_change_url,
  Training,
  getTrainings,
} from "./training";
import { CalendarEvent, getCalendarEvents } from "./calendar";
import { Data, getTrainingStatistics } from "./trainingStatistics";

const fetchCustomers = (
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>
) => {
  fetch(customers_url)
    .then((r) => r.json())
    .then((o) => setCustomers(getCustomers(o.content)))
    .catch((e) => console.error(e));
};

const addCustomer = (
  customer: Customer,
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>
) => {
  fetch(customers_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  })
    .then(() => fetchCustomers(setCustomers))
    .catch((e) => console.error(e));
};

const updateCustomer = (
  link_self: string,
  customer: Customer,
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>
) => {
  delete customer.link_self;
  fetch(link_self, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  })
    .then(() => fetchCustomers(setCustomers))
    .catch((e) => console.error(e));
};

const delCustomer = (
  link_self: string,
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>
) => {
  fetch(link_self, { method: "DELETE" })
    .then(() => fetchCustomers(setCustomers))
    .catch((e) => console.error(e));
};

const fetchTrainings = (
  setTrainings: React.Dispatch<React.SetStateAction<Training[]>>
) => {
  fetch(trainings_url)
    .then((r) => r.json())
    .then((o) => setTrainings(getTrainings(o)))
    .catch((e) => console.error(e));
};

const addTraining = (
  training: Training,
  emptyTraining: Training,
  setTraining: React.Dispatch<React.SetStateAction<Training>>
) => {
  fetch(trainings_change_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(training),
  })
    .then(() => setTraining(emptyTraining))
    .catch((e) => console.error(e));
};

const delTraining = (
  id: number,
  setTrainings: React.Dispatch<React.SetStateAction<Training[]>>
) => {
  fetch(`${trainings_change_url}/${id}`, { method: "DELETE" })
    .then(() => fetchTrainings(setTrainings))
    .catch((e) => console.error(e));
};

const fetchCalendarEvents = (
  setEvents: React.Dispatch<React.SetStateAction<CalendarEvent[]>>
) => {
  fetch(trainings_url)
    .then((r) => r.json())
    .then((o) => setEvents(getCalendarEvents(o)))
    .catch((e) => console.error(e));
};

const fetchTrainingStatistics = (
  setData: React.Dispatch<React.SetStateAction<Data>>
) => {
  fetch(trainings_url)
    .then((r) => r.json())
    .then((o) => setData(getTrainingStatistics(o, [])))
    .catch((e) => console.error(e));
};

export {
  fetchCustomers,
  addCustomer,
  updateCustomer,
  delCustomer,
  fetchTrainings,
  addTraining,
  delTraining,
  fetchCalendarEvents,
  fetchTrainingStatistics,
};
