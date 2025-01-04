"use client";

import React, { HTMLProps, useEffect, useState } from "react";
import axios from "axios";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  Table,
  Column,
} from "@tanstack/react-table";

export default function DataList() {
  const [textData, setTextData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const [rowSelection, setRowSelection] = useState({})
  console.log('rowSelection', rowSelection)

  useEffect(() => {
    axios("/api/image/text-tables", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      setTextData(res.data);
    });
  }, []);

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: "orgCode",
        header: "처리과코드",
      },
      {
        accessorKey: "unitCode",
        header: "구기록물등록번호",
      },
      {
        accessorKey: "docYear",
        header: "철생산년도",
      },
      {
        accessorKey: "volNo",
        header: "권수",
      },
      {
        accessorKey: "detOrgCode",
        header: "건코드",
      },
      {
        accessorKey: "detYear",
        header: "건생산년도",
      },
      {
        accessorKey: "labelNo",
        header: "임시레이블번호",
      },
      {
        accessorKey: "oldOrgName",
        header: "처리과",
      },
      {
        accessorKey: "docDesc",
        header: "철명",
      },
      {
        accessorKey: "detDesc",
        header: "건명",
      },
      {
        accessorKey: "docNo",
        header: "철번호",
      },
      {
        accessorKey: "detNo",
        header: "건번호",
      },
      {
        accessorKey: "detailStatus",
        header: "접수1, 생산2",
      },
      {
        accessorKey: "sendDate",
        header: "생산일자",
      },
      {
        accessorKey: "oldOrgDocNo",
        header: "접수번호",
      },
      {
        accessorKey: "oldDocTerm",
        header: "보존연한",
      },
      {
        accessorKey: "docName",
        header: "보낸사람",
      },
      {
        accessorKey: "userName",
        header: "기안자",
      },
      {
        accessorKey: "detDecision",
        header: "결재자",
      },
      {
        accessorKey: "startPage",
        header: "시작페이지",
      },
      {
        accessorKey: "endPage",
        header: "끝페이지",
      },
      {
        accessorKey: "detPage",
        header: "면수",
      },
      {
        accessorKey: "openFlag",
        header: "공개여부",
      },
      {
        accessorKey: "openGradeFlag1",
        header: "1호",
      },
      {
        accessorKey: "openGradeFlag2",
        header: "2호",
      },
      {
        accessorKey: "openGradeFlag3",
        header: "3호",
      },
      {
        accessorKey: "openGradeFlag4",
        header: "4호",
      },
      {
        accessorKey: "openGradeFlag5",
        header: "5호",
      },
      {
        accessorKey: "openGradeFlag6",
        header: "6호",
      },
      {
        accessorKey: "openGradeFlag7",
        header: "7호",
      },
      {
        accessorKey: "openGradeFlag8",
        header: "8호",
      },
      {
        accessorKey: "openGrade",
        header: "공개등급",
      },
      {
        accessorKey: "createdAt",
        header: "입력날짜",
      },
      {
        accessorKey: "updatedAt",
        header: "수정날짜",
      },
      {
        accessorKey: "inputTime",
        header: "입력시간",
      },
      {
        accessorKey: "updateTime",
        header: "수정시간",
      },
      {
        accessorKey: "imagePath",
        header: "이미지",
        cell: ({ row }) => {
          const urlEncodedPath = encodeURIComponent(row.original?.image?.path.replaceAll('./uploads/', ''))
          return row.original?.image?.path ? <img src={`/api/image/file/${urlEncodedPath}`} alt="이미지" /> : null
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: textData,
    columns,
    state: {
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className="p-2">
      {/* <div>
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search all columns..."
        />
      </div> */}
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>
        {Object.keys(rowSelection).length} of{' '}
        {table.getPreFilteredRowModel().rows.length} Total Rows Selected
      </div>
      <table>
        {/* <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead> */}
        
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className="border">
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}


function Filter({
  column,
  table,
}: {
  column: Column<any, any>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={((column.getFilterValue() as any)?.[0] ?? '') as string}
        onChange={e =>
          column.setFilterValue((old: any) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={((column.getFilterValue() as any)?.[1] ?? '') as string}
        onChange={e =>
          column.setFilterValue((old: any) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={(column.getFilterValue() ?? '') as string}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 border shadow rounded"
    />
  )
}

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}