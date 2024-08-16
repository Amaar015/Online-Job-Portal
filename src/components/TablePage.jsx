import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Checkbox,
} from "@mui/material";

const TablePage = ({ columns, data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowSelection = (event, row) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(selectedRows.filter((selectedRow) => selectedRow.id !== row.id));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Paper sx={{ width: "90%", marginLeft: "5%" }}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                    key={column.id}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedRows.some(
                            (selectedRow) => selectedRow.id === row.id
                          )}
                          onChange={(e) => handleRowSelection(e, row)}
                          color="primary"
                        />
                      </TableCell>
                      {columns
                        .filter((column) => column.id !== "select")
                        .map((column) => (
                          <TableCell key={column.id}>{row[column.id]}</TableCell>
                        ))}
                        
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowsPerPage}
          page={page}
          count={data.length}
          component="div"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Paper>
    </div>
  );
};

export default TablePage;
