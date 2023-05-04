import "../styles/Functionalities.css";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { CustomerForm } from "./CustomerForm";
import { TrainingForm } from "./TrainingForm";
import { emptyCustomer, Customer } from "../lib/customer";
import { emptyTraining } from "../lib/training";
import { X, confirmMessage } from "../lib/var";
import { delCustomer } from "../lib/io";

export function CustomerFunctionalities({
  getSelected,
  setCustomers,
  expCData,
}: {
  getSelected: Function;
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
  expCData: Function;
}) {
  const [customerFormOpen, setCustomerFormOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState(true);
  const [customer, setCustomer] = useState(emptyCustomer);
  const [trainingFormOpen, setTrainingFormOpen] = useState(false);
  const [training, setTraining] = useState(emptyTraining);

  return (
    <div id="functionalitiesContainer">
      <CustomerForm
        open={customerFormOpen}
        setOpen={setCustomerFormOpen}
        newCustomer={newCustomer}
        customer={customer}
        setCustomer={setCustomer}
        setCustomers={setCustomers}
      />
      <TrainingForm
        open={trainingFormOpen}
        setOpen={setTrainingFormOpen}
        emptyTraining={emptyTraining}
        training={training}
        setTraining={setTraining}
      />
      <fieldset id="formContainer">
        <legend>Functionalities:</legend>
        <form>
          <Stack
            direction="row"
            spacing={X / 400}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              onClick={() => {
                setNewCustomer(true);
                setCustomer(emptyCustomer);
                setCustomerFormOpen(true);
              }}
              variant="contained"
            >
              New Customer
            </Button>
            <Button
              onClick={() => {
                let s = getSelected();
                if (s.length) {
                  setNewCustomer(false);
                  setCustomer(s[0].data);
                  setCustomerFormOpen(true);
                }
              }}
              variant="contained"
            >
              Update
            </Button>
            <Button
              onClick={() => {
                let s = getSelected();
                s.length &&
                  window.confirm(confirmMessage) &&
                  delCustomer(s[0].data.link_self, setCustomers);
              }}
              variant="contained"
            >
              Delete
            </Button>
            <Button
              onClick={() => {
                let s = getSelected();
                if (s.length) {
                  setTraining({
                    ...training,
                    customer_name: `${s[0].data.firstname} ${s[0].data.lastname}`,
                    date: dayjs(),
                    customer: s[0].data.link_self,
                  });
                  setTrainingFormOpen(true);
                }
              }}
              variant="contained"
            >
              New Training
            </Button>
            <Button
              onClick={() => expCData({ fileName: "customer_data.csv" })}
              variant="contained"
            >
              Export
            </Button>
          </Stack>
        </form>
      </fieldset>
    </div>
  );
}
