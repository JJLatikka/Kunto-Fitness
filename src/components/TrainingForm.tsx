import "../styles/Form.css";
import dayjs from "dayjs";
import { dateFormat, input_style_override } from "../lib/var";
import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Training, validate, alertMessage } from "../lib/training";
import { addTraining } from "../lib/io";

export function TrainingForm({
  open,
  setOpen,
  emptyTraining,
  training,
  setTraining,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  emptyTraining: Training;
  training: any;
  setTraining: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [date, setDate] = useState<any>(dayjs());
  const change = (n: any, v: any) => setTraining({ ...training, [n]: v });
  const getLab = (k: string) => {
    return k === "customer_name"
      ? "Customer Name"
      : k === "duration"
      ? "Duration (min.)"
      : "Activity";
  };
  const textFields = Object.keys(training)
    .slice(0, 3)
    .map((k, i) => (
      <TextField
        key={i}
        margin="dense"
        name={k}
        label={getLab(k)}
        value={training[k] ? training[k] : ""}
        onChange={(event) => change(event.target.name, event.target.value)}
        fullWidth
        variant="outlined"
        disabled={k === "customer_name"}
      />
    ));

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle id="dialog_title">Training information</DialogTitle>
        <DialogContent id="dialog_content">
          <DialogContentText>
            Here you can add a new training for your loyal and athletic
            customer, which makes him or her sweat and you rich!
          </DialogContentText>
          {textFields}
          <DateTimePicker
            sx={input_style_override}
            format={dateFormat}
            label="Date"
            value={date}
            onChange={(d) => {
              setDate(d);
              setTraining({ ...training, date: d });
            }}
          />
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
              if (validate(training)) {
                addTraining(training, emptyTraining, setTraining);
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
