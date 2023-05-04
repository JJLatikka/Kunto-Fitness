import "../styles/Functionalities.css";
import { Button, Stack } from "@mui/material";
import { Training } from "../lib/training";
import { X, confirmMessage } from "../lib/var";
import { delTraining } from "../lib/io";

export function TrainingFunctionalities({
  getSelected,
  setTrainings,
  expTData,
}: {
  getSelected: Function;
  setTrainings: React.Dispatch<React.SetStateAction<Training[]>>;
  expTData: Function;
}) {
  return (
    <div id="functionalitiesContainer">
      <fieldset id="formContainer">
        <legend>Functionalities:</legend>
        <form>
          <Stack
            direction="row"
            spacing={X / 75}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              onClick={() => {
                let s = getSelected();
                s.length &&
                  window.confirm(confirmMessage) &&
                  delTraining(s[0].data.id, setTrainings);
              }}
              variant="contained"
            >
              Delete
            </Button>
            <Button
              onClick={() => expTData({ fileName: "training_data.csv" })}
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
