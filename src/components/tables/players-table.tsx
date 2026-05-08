"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PlayerSummary } from "@/lib/types";

const columns: any[] = [
  { accessorKey: "name", header: "Player" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "jerseyNumber", header: "Jersey" },
  { accessorKey: "battingStyle", header: "Batting" },
  { accessorKey: "bowlingStyle", header: "Bowling" },
  { accessorKey: "availability", header: "Availability" },
];

export function PlayersTable({ data }: { data: PlayerSummary[] }) {
  const table = useReactTable<any>({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel() });

  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Player directory</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="text-left text-slate-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border-b border-white/10 px-4 py-3 font-medium">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-white/5 text-slate-200 last:border-0">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
