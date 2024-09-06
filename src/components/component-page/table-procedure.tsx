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
import { headersProcedures } from "@/data/headers";

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

export function TableProcedure({ data }: TableDataProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headersProcedures.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((customer, index) => (
          <TableRow key={index}>
            <Cell>{customer.procedure}</Cell>
            <Cell>{customer.city}</Cell>
            <Cell>{customer.state}</Cell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
