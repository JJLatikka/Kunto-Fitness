import "../styles/Trainings.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridReact } from "ag-grid-react";
import { columns, defColDef, Training } from "../lib/training";
import { useState, useRef, useEffect } from "react";
import { TrainingFunctionalities } from "./TrainingFunctionalities";
import { gridRH } from "../lib/var";
import { fetchTrainings } from "../lib/io";

export function Trainings() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const tGridRef = useRef<any>(null);
  const getSelected = () => tGridRef.current.api.getSelectedNodes();
  const expTData = (fN: object) => tGridRef.current.api.exportDataAsCsv(fN);

  useEffect(() => {
    fetchTrainings(setTrainings);
  }, []);

  return (
    <div id="trainings_container">
      <TrainingFunctionalities
        getSelected={getSelected}
        setTrainings={setTrainings}
        expTData={expTData}
      />
      <div id="trainings_gridContainer">
        <div id="trainings_grid" className="ag-theme-material">
          <AgGridReact
            ref={tGridRef}
            rowSelection="single"
            rowHeight={gridRH}
            columnDefs={columns}
            defaultColDef={defColDef}
            animateRows={true}
            rowData={trainings}
          />
        </div>
      </div>
    </div>
  );
}
