import React from "react";
import "./App.css";
import { ServiceInputId } from "./components/component-page/service-input-id";
import { TableData } from "./components/component-page/table-data";
import { Customer } from "./types";
import { Download } from "lucide-react";
import { headers } from "./data/headers";

function App() {
  const [customersData, setCustomersData] = React.useState<Customer[]>([]);

  const hasCustomerData = customersData.length > 0;

  function updateCustomerData(customer: Customer) {
    setCustomersData((prev) => [...prev, customer]);
  }

  function arrayToCSV() {
    const data = customersData.map((row) => {
      return Object.values(row).join(",");
    });

    return [headers, ...data].join("\n");
  }

  function downloadCSV() {
    const csv = arrayToCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "customers.csv");

    document.body.appendChild(a);

    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="px-5">
      <ServiceInputId updateCustomerData={updateCustomerData} />
      {hasCustomerData && (
        <div className="mt-10">
          <TableData customers={customersData} />
        </div>
      )}
      {hasCustomerData && (
        <div className="flex justify-end">
          <button
            className="flex items-center gap-2 mt-6 text-teal-950"
            onClick={downloadCSV}
          >
            <span className="text-sm">Fazer download</span>
            <Download size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
