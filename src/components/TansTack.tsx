import { useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectUsers,
  fetchUsers,
} from "../redux/users/userSlice";
import { StyledTable, TableContainer } from "../style/tableStyle";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

const columnsHelper = createColumnHelper<User>();

const columns = [
  columnsHelper.accessor("id", {
    header: "No",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor("firstName", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor("lastName", {
    header: "Last Name",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor("role", {
    header: "Role",
    cell: (info) => info.getValue(),
  }),
];

const TansTack = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const table = useReactTable({
    columns,
    data: users,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

    return (
      <TableContainer>
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    );
};

export default TansTack;
