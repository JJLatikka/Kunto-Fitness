import "../styles/Form.css";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Customer, validate, alertMessage } from "../lib/customer";
import { addCustomer, updateCustomer } from "../lib/io";

export function CustomerForm({
  open,
  setOpen,
  newCustomer,
  customer,
  setCustomer,
  setCustomers,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  newCustomer: boolean;
  customer: any;
  setCustomer: React.Dispatch<React.SetStateAction<any>>;
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}) {
  const change = (n: any, v: any) => setCustomer({ ...customer, [n]: v });
  const cap = (k: string) => `${k.charAt(0).toUpperCase()}${k.substring(1)}`;
  const textFields = Object.keys(customer)
    .slice(0, 7)
    .map((k, i) => (
      <TextField
        key={i}
        margin="dense"
        name={k}
        label={cap(k)}
        value={customer[k]}
        onChange={(event) => change(event.target.name, event.target.value)}
        fullWidth
        variant="outlined"
      />
    ));

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle id="dialog_title">Customer information</DialogTitle>
        <DialogContent id="dialog_content">
          <DialogContentText>
            Here you can add a new loyal customer of your firm to the system or
            update the information of an already added athletic individual!
          </DialogContentText>
          {textFields}
        </DialogContent>
        <DialogActions id="dialog_actions">
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              if (validate(customer)) {
                newCustomer
                  ? addCustomer(customer, setCustomers)
                  : updateCustomer(customer.link_self, customer, setCustomers);
                setOpen(false);
              } else {
                alert(alertMessage);
              }
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
