/* eslint-disable @typescript-eslint/no-explicit-any */
import { headers } from "@/data/headers";
import { ThemeProvider } from "@/providers/theme";
import React from "react";
import { ServiceInputId } from "./service-input-id";
import { Download } from "lucide-react";
import { TableData } from "./table-data";

const data = {
  customer_name: "Paciente ",
  cep: "71010-214",
  procedure_type: "Exames",
  procedure_name: "Tomografia",
  sale_completed: "No",
  reason_non_sale: "Não tenho o pedido médico para esse exame",
  stage_service_stoped: "Procedimento não disponível na região",
};

export function PageDoidera() {
  const [customersData, setCustomersData] = React.useState<any[]>([]);

  const hasCustomerData = customersData.length > 0;

  function updateCustomerData(data: any) {
    setCustomersData((prev) => [...prev, data]);
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-5">
        <ServiceInputId updateCustomerData={updateCustomerData} data={data} />
        {hasCustomerData && (
          <div className="mt-10">
            <TableData data={customersData} />
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
