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

import { Customer } from "@/types";

interface TableDataProps {
  customers: Customer[];
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

export function TableData({ customers }: TableDataProps) {
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
        {customers.map((customer, index) => (
          <TableRow key={index}>
            <Cell>{customer.clientName}</Cell>
            <Cell>{customer.cpf}</Cell>
            <Cell>{customer.postalCode}</Cell>
            <Cell>{customer.proceduresInquired}</Cell>
            <Cell>{customer.saleCompleted}</Cell>
            <Cell>{customer.reasonForNoSale}</Cell>
            <Cell>{customer.contactWhatsApp}</Cell>
            <Cell>{customer.stageStopped}</Cell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
