import "../styles/Customers.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridReact } from "ag-grid-react";
import { columns, defColDef, Customer } from "../lib/customer";
import { useState, useRef, useEffect } from "react";
import { CustomerFunctionalities } from "./CustomerFunctionalities";
import { gridRH } from "../lib/var";
import { fetchCustomers } from "../lib/io";

export function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const cGridRef = useRef<any>(null);
  const getSelected = () => cGridRef.current.api.getSelectedNodes();
  const expCData = (fN: object) => cGridRef.current.api.exportDataAsCsv(fN);

  useEffect(() => {
    fetchCustomers(setCustomers);
  }, []);

  return (
    <div id="customers_container">
      <CustomerFunctionalities
        getSelected={getSelected}
        setCustomers={setCustomers}
        expCData={expCData}
      />
      <div id="customers_gridContainer">
        <div id="customers_grid" className="ag-theme-material">
          <AgGridReact
            ref={cGridRef}
            rowSelection="single"
            rowHeight={gridRH}
            columnDefs={columns}
            defaultColDef={defColDef}
            animateRows={true}
            rowData={customers}
          />
        </div>
      </div>
    </div>
  );
}
