/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { headers } from "@/data/headers";

interface TableDataProps {
  data: any[];
}

function Cell({ children }: { children: string }) {
  return (
    <TableCell>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="truncate max-w-32">{children}</div>
          </TooltipTrigger>
          <TooltipContent>{children}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </TableCell>
  );
}

export function TableData({ data }: TableDataProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((customer, index) => (
          <TableRow key={index}>
            <Cell>{customer.customer_name}</Cell>
            <Cell>{customer.cep}</Cell>
            <Cell>{customer.procedure_type}</Cell>
            <Cell>{customer.procedure_name}</Cell>
            <Cell>{customer.sale_completed}</Cell>
            <Cell>{customer.reason_non_sale}</Cell>
            <Cell>{customer.stage_service_stoped}</Cell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
