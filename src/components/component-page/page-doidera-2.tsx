/* eslint-disable @typescript-eslint/no-explicit-any */
import { headers2 } from "@/data/headers";
import { ThemeProvider } from "@/providers/theme";
import React from "react";
import { ServiceInputId } from "./service-input-id";
import { TableData2 } from "./table-data-2";
import { Download } from "lucide-react";

const data = {
  procedure: "Exame de sangue",
  city: "Condeúba",
  state: "BA",
};

export function PageDoidera2() {
  const [customersData, setCustomersData] = React.useState<any[]>([]);

  const hasCustomerData = customersData.length > 0;

  function updateCustomerData(data: any) {
    setCustomersData((prev) => [...prev, data]);
  }

  function arrayToCSV() {
    const data = customersData.map((row) => {
      return Object.values(row).join(",");
    });

    return [headers2, ...data].join("\n");
  }

  function downloadCSV() {
    const csv = arrayToCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "procedimentos-indisponiveis.csv");

    document.body.appendChild(a);

    a.click();
    document.body.removeChild(a);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-5">
        <ServiceInputId updateCustomerData={updateCustomerData} data={data} />
        {hasCustomerData && (
          <div className="mt-10">
            <TableData2 data={customersData} />
          </div>
        )}
        {hasCustomerData && (
          <div className="flex justify-end">
            <button
              className="flex items-center gap-2 mt-6"
              onClick={downloadCSV}
            >
              <span className="text-sm">Fazer download</span>
              <Download size={16} />
            </button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
